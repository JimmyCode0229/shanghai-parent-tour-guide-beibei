import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const sandbox = {
  window: {},
  document: {
    addEventListener() {},
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    }
  }
};

vm.createContext(sandbox);
vm.runInContext(source, sandbox);

const { ALLOWED_DISTRICTS, FILTERS, plans, attractions } = sandbox.window.SHANGHAI_PARENT_TOUR_DATA;

const required = [
  "id", "name", "district", "types", "comfortTags", "intro", "image",
  "recommendedFor", "playSuggestion", "bestTime", "duration", "transit",
  "walkingLoad", "restConvenience", "weatherFit", "bookingNote", "nearby"
];

const errors = [];

if (plans.length < 6) errors.push("Expected at least 6 recommended plans.");
if (attractions.length < 26) errors.push("Expected at least 26 attractions.");

for (const district of ALLOWED_DISTRICTS) {
  if (!attractions.some(attraction => attraction.district === district)) {
    errors.push(`Expected at least one attraction in ${district}.`);
  }
}

const imageUsage = new Map();
for (const attraction of attractions) {
  const current = imageUsage.get(attraction.image) || [];
  current.push(attraction.name);
  imageUsage.set(attraction.image, current);
}
for (const [image, names] of imageUsage) {
  if (names.length > 1) {
    errors.push(`Image reused by multiple attractions: ${names.join(", ")} -> ${image}`);
  }
}

for (const attraction of attractions) {
  for (const field of required) {
    const value = attraction[field];
    if (Array.isArray(value) ? value.length === 0 : !value) {
      errors.push(`${attraction.id || "unknown"} missing ${field}`);
    }
  }
  if (!ALLOWED_DISTRICTS.includes(attraction.district)) {
    errors.push(`${attraction.name} has unsupported district ${attraction.district}`);
  }
  if (/loremflickr|source\.unsplash|picsum/.test(attraction.image)) {
    errors.push(`${attraction.name} uses a random or generic image source.`);
  }
  if (!/玩法|观景|拍照|散步|参观|逛|看/.test(attraction.playSuggestion)) {
    errors.push(`${attraction.name} playSuggestion should include a concrete core activity.`);
  }
  for (const type of attraction.types || []) {
    if (!FILTERS.types.includes(type)) errors.push(`${attraction.name} has unsupported type ${type}`);
  }
  for (const tag of attraction.comfortTags || []) {
    if (!FILTERS.comfort.includes(tag)) errors.push(`${attraction.name} has unsupported comfort tag ${tag}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Verified ${attractions.length} attractions and ${plans.length} plans.`);
