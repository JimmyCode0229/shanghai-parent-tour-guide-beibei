const ALLOWED_DISTRICTS = ["徐汇区", "静安区", "黄浦区", "长宁区", "杨浦区", "虹口区", "普陀区", "浦东区"];

const FILTERS = {
  districts: ALLOWED_DISTRICTS,
  types: ["地标夜景", "历史人文", "博物馆展馆", "城市漫步", "公园滨江", "寺庙园林", "商圈休闲"],
  comfort: ["少走路", "地铁方便", "雨天友好", "休息方便", "夜景推荐", "需要预约"]
};

const imageFor = fileName => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=900`;

const representativeImages = {
  bund: imageFor("The Bund, Shanghai.jpg"),
  wukang: imageFor("Wukang Mansion 20251128.jpg"),
  church: imageFor("St. Ignatius Cathedral, Shanghai.jpg"),
  exhibition: imageFor("Shanghai Exhibition Centre.jpg"),
  orientalPearl: imageFor("Oriental Pearl Tower Shanghai.jpg"),
  museum: imageFor("Shanghai Museum.jpg"),
  yuyuan: imageFor("Yuyuan Garden.jpg"),
  nanjingRoad: imageFor("Nanjing_Road,_Shanghai.jpg"),
  jingan: imageFor("Jing'an Temple, Shanghai.jpg"),
  naturalHistory: imageFor("Shanghai (December 5, 2015) - 07.jpg")
};

const plans = [
  {
    name: "南京东路 - 外滩夜景经典线",
    summary: "第一次来上海最稳的一条线，从人民广场一路走到黄浦江边，城市辨识度最高。",
    duration: "约 4-5 小时",
    bestTime: "周五或周六 15:30 后",
    stops: ["人民广场", "南京东路步行街", "外滩观景长廊", "外滩万国建筑群"],
    comfort: "全程地铁方便，南京东路商场多，累了容易坐下休息。"
  },
  {
    name: "老法租界散步漫游",
    summary: "看梧桐、老建筑和街区生活感，适合放在周六上午或下午，不赶路。",
    duration: "约 4 小时",
    bestTime: "上午 9:30 或下午 15:00 后",
    stops: ["武康大楼", "武康路", "安福路", "巨富长街区"],
    comfort: "以平路步行为主，可在安福路、富民路一带找咖啡店休息。"
  },
  {
    name: "豫园 - 城隍庙 - 外滩老城厢线",
    summary: "传统上海味道最集中，园林、九曲桥、小吃和外滩可以串成半天。",
    duration: "约 4-5 小时",
    bestTime: "上午出发，避开晚高峰人潮",
    stops: ["豫园", "九曲桥", "城隍庙商圈", "外滩南段"],
    comfort: "人多但点位集中，适合慢慢逛；周边餐饮选择很多。"
  },
  {
    name: "静安寺 - 南京西路城市精华线",
    summary: "一边看千年寺院，一边体验上海最成熟的市中心商圈，体力压力较小。",
    duration: "约 3-4 小时",
    bestTime: "周六或周日上午",
    stops: ["静安寺", "静安公园", "南京西路", "上海展览中心"],
    comfort: "地铁直达，商场密集，适合需要随时休息和吃饭的行程。"
  },
  {
    name: "陆家嘴 - 浦东天际线线",
    summary: "看上海现代化的一面，和外滩夜景形成互补，适合傍晚到晚上。",
    duration: "约 4 小时",
    bestTime: "周六 16:00 后",
    stops: ["陆家嘴环形天桥", "东方明珠", "上海中心外观", "陆家嘴滨江"],
    comfort: "商场和滨江空间结合，拍照点集中；大风天缩短江边停留。"
  },
  {
    name: "雨天博物馆文化线",
    summary: "如果周末下雨或太热，用室内文化点位保证游览质量。",
    duration: "约 5-6 小时",
    bestTime: "全天，建议上午开始",
    stops: ["上海博物馆", "上海自然博物馆", "中华艺术宫"],
    comfort: "室内为主，但馆内也会走路，建议只选两馆深逛。"
  }
];

const attractions = [
  {
    id: "the-bund",
    name: "外滩",
    district: "黄浦区",
    types: ["地标夜景", "公园滨江"],
    comfortTags: ["地铁方便", "夜景推荐", "休息方便"],
    intro: "上海最有代表性的滨江地标，可以同时看到万国建筑群和浦东天际线。",
    image: representativeImages.bund,
    recommendedFor: "第一次来上海很值得看，辨识度高，拍照效果好。",
    playSuggestion: "从南京东路慢慢走到外滩观景长廊，日落前站到江边看天色变化，亮灯后沿万国建筑群拍照散步。",
    bestTime: "傍晚至夜间",
    duration: "1.5-2 小时",
    transit: "地铁 2/10 号线南京东路站后步行前往。",
    walkingLoad: "中等：滨江步行较多，但路线平坦。",
    restConvenience: "南京东路和外滩周边商场、餐厅较多，休息方便。",
    weatherFit: "晴天和夜景最佳；大雨或大风天体验下降。",
    bookingNote: "无需预约；周末夜间人流较大，建议避开 19:30-20:30 的最拥挤时段。",
    nearby: ["南京东路步行街", "人民广场", "豫园"]
  },
  {
    id: "shanghai-museum",
    name: "上海博物馆",
    district: "黄浦区",
    types: ["博物馆展馆", "历史人文"],
    comfortTags: ["少走路", "地铁方便", "雨天友好", "需要预约"],
    intro: "人民广场旁的中国古代艺术博物馆，青铜器、陶瓷、书画展品都很适合慢看。",
    image: representativeImages.museum,
    recommendedFor: "室内、文化含量高，适合上午或雨天安排。",
    playSuggestion: "提前看好展厅，重点看青铜、陶瓷、书画，不必每层都走满。",
    bestTime: "上午 9:30-11:30",
    duration: "2-3 小时",
    transit: "地铁 1/2/8 号线人民广场站。",
    walkingLoad: "低到中等：馆内步行可控，有休息点。",
    restConvenience: "人民广场、来福士和周边商场可休息吃饭。",
    weatherFit: "雨天友好，夏天也舒服。",
    bookingNote: "官方信息显示实行预约制，通常周一闭馆，出行前请确认预约和开放安排。",
    nearby: ["人民广场", "南京东路步行街", "上海城市规划展示馆"]
  },
  {
    id: "yuyuan",
    name: "豫园",
    district: "黄浦区",
    types: ["寺庙园林", "历史人文", "商圈休闲"],
    comfortTags: ["地铁方便", "休息方便"],
    intro: "江南园林和老城厢商业街区相连，传统上海味道浓。",
    image: representativeImages.yuyuan,
    recommendedFor: "适合看传统建筑、吃小点心、拍有上海老城氛围的照片。",
    playSuggestion: "先逛园林，再到九曲桥和豫园商城一带简单吃喝。",
    bestTime: "上午或傍晚",
    duration: "2-3 小时",
    transit: "地铁 10/14 号线豫园站。",
    walkingLoad: "中等：人多时走走停停，园内台阶和桥较多。",
    restConvenience: "周边餐饮密集，但节假日座位紧张。",
    weatherFit: "晴天更好；雨天可逛商场部分。",
    bookingNote: "园林和商业区规则不同，节假日灯会或活动期间人流很大。",
    nearby: ["城隍庙", "外滩", "人民广场"]
  },
  {
    id: "nanjing-road",
    name: "南京东路步行街",
    district: "黄浦区",
    types: ["商圈休闲", "地标夜景"],
    comfortTags: ["地铁方便", "休息方便", "夜景推荐"],
    intro: "上海经典商业步行街，适合和外滩串联成轻松半日路线。",
    image: representativeImages.nanjingRoad,
    recommendedFor: "不用专门做攻略，吃饭、买水、休息都方便。",
    playSuggestion: "从人民广场方向往外滩慢走，看到累了就进商场休息。",
    bestTime: "下午到夜间",
    duration: "1-2 小时",
    transit: "地铁 1/2/8 号线人民广场站或 2/10 号线南京东路站。",
    walkingLoad: "中等：步行街较长，但可随时停。",
    restConvenience: "商场、餐厅、咖啡店很多。",
    weatherFit: "小雨可逛商场，大雨不建议长时间户外步行。",
    bookingNote: "无需预约；周末晚间人流较大，照看好随身物品。",
    nearby: ["外滩", "人民广场", "上海博物馆"]
  },
  {
    id: "wukang-road",
    name: "武康路",
    district: "徐汇区",
    types: ["城市漫步", "历史人文"],
    comfortTags: ["地铁方便", "休息方便"],
    intro: "梧桐树、老建筑和街角小店构成的上海经典城市漫步路线。",
    image: representativeImages.wukang,
    recommendedFor: "节奏慢、照片好看，适合不赶景点的下午。",
    playSuggestion: "先在武康大楼路口拍照，再沿武康路看老洋房、梧桐和街角店铺，最后接安福路或湖南路散步。",
    bestTime: "上午 10 点前或下午 3 点后",
    duration: "1.5-2.5 小时",
    transit: "地铁 10/11 号线交通大学站。",
    walkingLoad: "中等：以步行为主，路线可随时缩短。",
    restConvenience: "咖啡店和餐厅较多，但热门店可能排队。",
    weatherFit: "晴天和阴天都好；高温天建议缩短路线。",
    bookingNote: "无需预约；武康大楼路口拍照人多，注意车辆和非机动车。",
    nearby: ["衡复风貌区", "徐家汇源", "上海图书馆"]
  },
  {
    id: "xujiahui-origin",
    name: "徐家汇源",
    district: "徐汇区",
    types: ["历史人文", "城市漫步"],
    comfortTags: ["地铁方便", "雨天友好", "休息方便"],
    intro: "徐家汇一带的历史建筑和文化空间集合，适合轻松看城市文脉。",
    image: representativeImages.church,
    recommendedFor: "既能看老建筑，也靠近商圈，安排弹性大。",
    playSuggestion: "参观徐家汇天主堂外观和广场，再看藏书楼、徐光启纪念馆一带，最后进徐家汇商圈休息。",
    bestTime: "上午或下午",
    duration: "2-3 小时",
    transit: "地铁 1/9/11 号线徐家汇站。",
    walkingLoad: "低到中等：点位集中，可走可停。",
    restConvenience: "港汇、汇金等商场近，吃饭休息方便。",
    weatherFit: "雨天可把室内点位和商场结合。",
    bookingNote: "部分小馆或教堂可能有开放时段变化，出行前确认。",
    nearby: ["武康路", "衡山路", "徐家汇商圈"]
  },
  {
    id: "jingan-temple",
    name: "静安寺",
    district: "静安区",
    types: ["寺庙园林", "历史人文", "商圈休闲"],
    comfortTags: ["地铁方便", "少走路", "休息方便"],
    intro: "繁华商圈中的寺院地标，传统建筑和现代城市反差很强。",
    image: representativeImages.jingan,
    recommendedFor: "交通极方便，游览不累，旁边就是成熟商圈。",
    playSuggestion: "先看寺院外观和主殿，再到芮欧、嘉里中心或久光休息吃饭。",
    bestTime: "上午或下午",
    duration: "1-1.5 小时",
    transit: "地铁 2/7/14 号线静安寺站。",
    walkingLoad: "低：点位集中，进出方便。",
    restConvenience: "周边商场密集，休息和餐饮选择多。",
    weatherFit: "小雨也可安排，商场可作为备选。",
    bookingNote: "寺院可能涉及门票或活动安排，出发前确认。",
    nearby: ["静安公园", "南京西路", "上海展览中心"]
  },
  {
    id: "natural-history-museum",
    name: "上海自然博物馆",
    district: "静安区",
    types: ["博物馆展馆"],
    comfortTags: ["雨天友好", "地铁方便", "需要预约"],
    intro: "大型自然科学博物馆，展陈丰富，适合雨天或需要室内安排时选择。",
    image: representativeImages.naturalHistory,
    recommendedFor: "室内体验完整，动线清楚，长辈和年轻人都容易看进去。",
    playSuggestion: "重点看生命长河、恐龙和上海故事相关展区，不必追求全馆刷完。",
    bestTime: "上午入馆",
    duration: "3-4 小时",
    transit: "地铁 13 号线自然博物馆站。",
    walkingLoad: "中等：馆大，建议中途坐下休息。",
    restConvenience: "馆内外有休息和餐饮点，周边静安商圈也方便。",
    weatherFit: "雨天和高温天友好。",
    bookingNote: "官方售票页显示通常周一闭馆，需关注购票和预约安排。",
    nearby: ["静安雕塑公园", "南京西路", "上海展览中心"]
  },
  {
    id: "zhongshan-park",
    name: "中山公园",
    district: "长宁区",
    types: ["公园滨江", "商圈休闲"],
    comfortTags: ["少走路", "地铁方便", "休息方便"],
    intro: "市中心老牌公园，绿荫多，适合在紧凑行程里放慢一下。",
    image: imageFor("Zhongshan Park, Shanghai.JPG"),
    recommendedFor: "如果父母上午坐车或逛街累了，这里适合缓一缓。",
    playSuggestion: "公园散步 40 分钟，再到龙之梦或来福士吃饭休息。",
    bestTime: "上午或傍晚",
    duration: "1-1.5 小时",
    transit: "地铁 2/3/4 号线中山公园站。",
    walkingLoad: "低：路线平缓，随时可停。",
    restConvenience: "公园座椅和周边商场都方便。",
    weatherFit: "晴天、阴天适合；雨天可转商场。",
    bookingNote: "无需预约；周边交通换乘人多，注意慢行。",
    nearby: ["愚园路", "长宁来福士", "龙之梦"]
  },
  {
    id: "yuyuan-road",
    name: "愚园路",
    district: "长宁区",
    types: ["城市漫步", "历史人文", "商圈休闲"],
    comfortTags: ["地铁方便", "休息方便"],
    intro: "安静有生活气的街区漫步路线，适合避开热门景点人潮。",
    image: imageFor("228 Yuyuan Road from far view-20220723.jpg"),
    recommendedFor: "节奏舒服，适合边走边聊天，体验上海日常感。",
    playSuggestion: "从江苏路或中山公园附近进入，选择一小段慢慢逛即可。",
    bestTime: "下午",
    duration: "1.5-2 小时",
    transit: "地铁 2/11 号线江苏路站或 2/3/4 号线中山公园站。",
    walkingLoad: "中等：以步行为主，可随时缩短。",
    restConvenience: "咖啡馆和小店较多，休息方便。",
    weatherFit: "晴天和阴天更好。",
    bookingNote: "无需预约；街区道路较窄，拍照时注意通行。",
    nearby: ["中山公园", "静安寺", "长宁来福士"]
  },
  {
    id: "yangpu-riverside",
    name: "杨浦滨江",
    district: "杨浦区",
    types: ["公园滨江", "城市漫步"],
    comfortTags: ["夜景推荐", "休息方便"],
    intro: "工业遗存和黄浦江景结合的滨江步道，视野开阔，人流相对更舒展。",
    image: imageFor("YangshupuWaterworks1.jpg"),
    recommendedFor: "比外滩更松弛，适合想看江景但不想太挤的时候。",
    playSuggestion: "选一段滨江慢走，不必走完全程；傍晚看江面和城市灯光。",
    bestTime: "傍晚",
    duration: "1.5-2 小时",
    transit: "可从地铁 12/18 号线相关站点换步行或打车到滨江段。",
    walkingLoad: "中等：滨江线性空间较长，建议只选一段。",
    restConvenience: "部分驿站和商业配套可休息，建议提前选入口。",
    weatherFit: "晴天、傍晚最佳；大风大雨不建议。",
    bookingNote: "无需预约；滨江夜间注意返程路线。",
    nearby: ["复兴岛", "东方渔人码头", "北外滩"]
  },
  {
    id: "fudan-university",
    name: "复旦大学周边",
    district: "杨浦区",
    types: ["历史人文", "城市漫步"],
    comfortTags: ["地铁方便", "少走路"],
    intro: "高校氛围浓，适合轻松看一看杨浦的文教气质。",
    image: imageFor("201704 Gate of Fudan University Jiangwan Campus.jpg"),
    recommendedFor: "如果父母喜欢校园和书卷气，这里比热门景点更安静。",
    playSuggestion: "参观校园周边和大学路街区，拍光华楼外观，若校内开放再短线散步，不强求进校。",
    bestTime: "上午或下午",
    duration: "1.5-2 小时",
    transit: "地铁 10 号线江湾体育场站或复旦大学站周边。",
    walkingLoad: "低到中等：可按体力选择街区长度。",
    restConvenience: "大学路餐饮、咖啡店较多。",
    weatherFit: "晴天和阴天适合。",
    bookingNote: "高校校内开放规则可能调整，以现场和官方通知为准。",
    nearby: ["大学路", "五角场", "江湾体育场"]
  },
  {
    id: "duolun-road",
    name: "多伦路文化名人街",
    district: "虹口区",
    types: ["历史人文", "城市漫步"],
    comfortTags: ["地铁方便", "少走路"],
    intro: "带有海派文化和近现代文学记忆的小街区，路线短而有特点。",
    image: imageFor("Duolun Famous-Cultural-Person Street,Shanghai多倫路文化名人街 - panoramio.jpg"),
    recommendedFor: "适合喜欢历史、人文和老建筑的父母，游览压力小。",
    playSuggestion: "从多伦路牌坊进入，慢看街边建筑和雕塑，再到四川北路休息。",
    bestTime: "上午或下午",
    duration: "1-1.5 小时",
    transit: "地铁 3 号线东宝兴路站或 10 号线四川北路站。",
    walkingLoad: "低：街区不大，适合短时间慢逛。",
    restConvenience: "四川北路商圈可补充餐饮和休息。",
    weatherFit: "晴天、阴天适合；雨天体验一般。",
    bookingNote: "无需预约；部分小馆开放时间可能不固定。",
    nearby: ["甜爱路", "鲁迅公园", "四川北路"]
  },
  {
    id: "postal-museum",
    name: "上海邮政博物馆",
    district: "虹口区",
    types: ["博物馆展馆", "历史人文"],
    comfortTags: ["雨天友好", "少走路"],
    intro: "苏州河畔的历史建筑和邮政主题展馆，外观也很有辨识度。",
    image: imageFor("General Post Office Building, Shanghai.jpg"),
    recommendedFor: "人文感强、体量适中，适合和北外滩或四川北路串联。",
    playSuggestion: "先看建筑外观，再按开放区域参观展陈。",
    bestTime: "下午",
    duration: "1-1.5 小时",
    transit: "地铁 10/12 号线天潼路站周边。",
    walkingLoad: "低：参观点集中。",
    restConvenience: "周边可到北苏州路、四川北路方向休息。",
    weatherFit: "雨天可作为短时室内点。",
    bookingNote: "开放日和时段可能调整，出行前确认。",
    nearby: ["北外滩", "四川北路", "乍浦路桥"]
  },
  {
    id: "changfeng-park",
    name: "长风公园",
    district: "普陀区",
    types: ["公园滨江", "商圈休闲"],
    comfortTags: ["少走路", "休息方便"],
    intro: "湖面和绿地开阔的老牌公园，比热门市中心景点更放松。",
    image: imageFor("Changfeng Park, Shanghai.JPG"),
    recommendedFor: "适合上午慢走，给周末行程留一段轻松呼吸的时间。",
    playSuggestion: "沿湖散步一小圈，选湖边和树荫路段拍照，不需要把公园全部走完。",
    bestTime: "上午或傍晚",
    duration: "1.5-2 小时",
    transit: "可乘地铁 15 号线长风公园站或打车到公园入口。",
    walkingLoad: "低到中等：路线可长可短。",
    restConvenience: "公园内有座椅，周边商场可吃饭休息。",
    weatherFit: "晴天、阴天适合；高温天建议上午。",
    bookingNote: "公园无需预约；内部项目另行确认。",
    nearby: ["长风大悦城", "苏州河步道", "环球港"]
  },
  {
    id: "global-harbor",
    name: "环球港",
    district: "普陀区",
    types: ["商圈休闲"],
    comfortTags: ["少走路", "地铁方便", "雨天友好", "休息方便"],
    intro: "大型商业综合体，适合作为天气不好或体力下降时的舒适备选。",
    image: imageFor("Global Harbor shopping mall and towers, Shanghai.JPG"),
    recommendedFor: "吃饭、休息、购物都方便，可以给行程兜底。",
    playSuggestion: "把它作为长风公园或苏州河散步后的吃饭休息点。",
    bestTime: "午后或雨天",
    duration: "1.5-3 小时",
    transit: "地铁 3/4/13 号线金沙江路站。",
    walkingLoad: "低：室内电梯扶梯齐全。",
    restConvenience: "餐饮、座位、洗手间都比较方便。",
    weatherFit: "雨天、高温天友好。",
    bookingNote: "无需预约；周末饭点餐厅可能排队。",
    nearby: ["长风公园", "苏州河步道", "华东师范大学"]
  },
  {
    id: "lpd-riverside",
    name: "陆家嘴滨江",
    district: "浦东区",
    types: ["地标夜景", "公园滨江"],
    comfortTags: ["夜景推荐", "地铁方便", "休息方便"],
    intro: "从浦东侧看黄浦江和外滩建筑群，视角和外滩互补。",
    image: imageFor("Lujiazui skyline from Pearl Tower.jpg"),
    recommendedFor: "适合想看上海现代天际线，也想避开外滩最密人流的时候。",
    playSuggestion: "傍晚到陆家嘴滨江平台观景拍照，看外滩万国建筑群亮灯，再去正大广场或国金中心休息。",
    bestTime: "傍晚至夜间",
    duration: "1.5-2 小时",
    transit: "地铁 2/14 号线陆家嘴站。",
    walkingLoad: "中等：滨江步行舒适但距离可长可短。",
    restConvenience: "正大广场、国金中心等商场方便。",
    weatherFit: "晴天和夜景最佳；大风天江边体感较冷。",
    bookingNote: "滨江无需预约；登高观景项目需另行购票确认。",
    nearby: ["东方明珠", "国金中心", "正大广场"]
  },
  {
    id: "china-art-museum",
    name: "中华艺术宫",
    district: "浦东区",
    types: ["博物馆展馆", "历史人文"],
    comfortTags: ["雨天友好", "地铁方便", "需要预约"],
    intro: "由世博中国馆改造而来，建筑辨识度很高，适合室内文化行程。",
    image: imageFor("China Art Museum, Shanghai.jpg"),
    recommendedFor: "空间大、建筑有记忆点，适合雨天或高温天。",
    playSuggestion: "重点看常设展和建筑外观，预留足够上下楼和休息时间。",
    bestTime: "上午或下午",
    duration: "2-3 小时",
    transit: "地铁 8 号线中华艺术宫站。",
    walkingLoad: "中等：馆内空间大，建议中途休息。",
    restConvenience: "馆内外有基础休息点，餐饮可转世博源方向。",
    weatherFit: "雨天、高温天友好。",
    bookingNote: "展览和预约规则可能调整，出行前确认官方信息。",
    nearby: ["世博源", "梅赛德斯-奔驰文化中心", "后滩滨江"]
  },
  {
    id: "anfuu-road",
    name: "安福路",
    district: "徐汇区",
    types: ["城市漫步", "商圈休闲"],
    comfortTags: ["地铁方便", "休息方便"],
    intro: "老法租界气质很浓的短街，书店、咖啡、剧场和街拍氛围集中。",
    image: imageFor("Shanghai Dramatic Arts Center.JPG"),
    recommendedFor: "适合接在武康路之后，给父母看上海更松弛精致的一面。",
    playSuggestion: "从武康路转入安福路，逛街边书店和小店，在话剧艺术中心附近拍照，再找咖啡店坐一会儿。",
    bestTime: "下午 3 点后",
    duration: "1-1.5 小时",
    transit: "地铁 1/7 号线常熟路站或 10/11 号线交通大学站后步行。",
    walkingLoad: "低到中等：街不长，适合慢走。",
    restConvenience: "咖啡店和餐厅多，但热门店周末可能排队。",
    weatherFit: "晴天、阴天适合；小雨可短逛。",
    bookingNote: "无需预约；周末人多，建议不要赶饭点。",
    nearby: ["武康路", "乌鲁木齐中路", "巨富长街区"]
  },
  {
    id: "jufuchang",
    name: "巨富长街区",
    district: "徐汇区",
    types: ["城市漫步", "商圈休闲"],
    comfortTags: ["地铁方便", "休息方便"],
    intro: "巨鹿路、富民路、长乐路一带是上海街区漫步的经典组合。",
    image: imageFor("Changle Rd. Shanghai.JPG"),
    recommendedFor: "比单看一个景点更能体验上海街区生活，适合周六下午慢逛。",
    playSuggestion: "从富民路进，串联巨鹿路、长乐路和常熟路，重点看梧桐街景、老洋房和小店门面。",
    bestTime: "下午",
    duration: "2-3 小时",
    transit: "地铁 1/7 号线常熟路站或 2/7 号线静安寺站。",
    walkingLoad: "中等：路线灵活，累了可随时缩短。",
    restConvenience: "咖啡馆、餐厅、小店密集。",
    weatherFit: "晴天和阴天最佳，高温天建议傍晚。",
    bookingNote: "无需预约；周末热门餐厅建议提前排队或预约。",
    nearby: ["安福路", "静安寺", "淮海中路"]
  },
  {
    id: "sinan-road",
    name: "思南路",
    district: "黄浦区",
    types: ["城市漫步", "历史人文"],
    comfortTags: ["地铁方便", "休息方便"],
    intro: "复兴中路附近的老洋房街区，安静、树荫多，适合慢慢看建筑。",
    image: imageFor("上海思南路建筑1.JPG"),
    recommendedFor: "适合不想挤热门景点时，安排一段有老上海气质的散步。",
    playSuggestion: "从思南公馆开始散步，拍老洋房和梧桐街景，再接复兴公园或新天地休息。",
    bestTime: "上午或下午",
    duration: "1.5-2 小时",
    transit: "地铁 10/13 号线新天地站或 13 号线淮海中路站。",
    walkingLoad: "低到中等：街区平缓，路线可控。",
    restConvenience: "思南公馆、新天地周边餐饮多。",
    weatherFit: "晴天、阴天适合，小雨也有氛围。",
    bookingNote: "无需预约；部分建筑仅可看外观。",
    nearby: ["复兴公园", "新天地", "淮海中路"]
  },
  {
    id: "xintiandi",
    name: "新天地",
    district: "黄浦区",
    types: ["历史人文", "商圈休闲"],
    comfortTags: ["地铁方便", "雨天友好", "休息方便"],
    intro: "石库门建筑和现代商业结合的上海代表性街区。",
    image: imageFor("Xintiandi 21741-Shanghai (33049647215).jpg"),
    recommendedFor: "适合吃饭、休息、看石库门街区，和思南路或淮海中路顺路。",
    playSuggestion: "先看石库门街区外观和一大会址周边，再找餐厅坐下休息，晚上灯光也好看。",
    bestTime: "下午到晚上",
    duration: "1.5-2.5 小时",
    transit: "地铁 10/13 号线新天地站。",
    walkingLoad: "低：范围集中。",
    restConvenience: "餐饮、商场、洗手间都方便。",
    weatherFit: "雨天可逛室内商业，晴天街区体验更好。",
    bookingNote: "热门餐厅建议预约；一大会址参观需按官方规则确认。",
    nearby: ["思南路", "复兴公园", "淮海中路"]
  },
  {
    id: "fuxing-park",
    name: "复兴公园",
    district: "黄浦区",
    types: ["公园滨江", "历史人文"],
    comfortTags: ["少走路", "地铁方便", "休息方便"],
    intro: "老法租界里的经典公园，树荫、草坪和市民生活气很足。",
    image: imageFor("Fuxing Park, Shanghai.JPG"),
    recommendedFor: "适合在思南路、新天地之间放慢节奏，给父母休息。",
    playSuggestion: "从公园北门或东门进入，沿树荫散步，看市民跳舞和花园景观，再接思南路。",
    bestTime: "上午",
    duration: "45 分钟-1.5 小时",
    transit: "地铁 10/13 号线新天地站或 13 号线淮海中路站。",
    walkingLoad: "低：公园内可坐可走。",
    restConvenience: "公园座椅多，周边餐饮也方便。",
    weatherFit: "晴天、阴天适合；雨天不建议久留。",
    bookingNote: "无需预约。",
    nearby: ["思南路", "新天地", "淮海中路"]
  },
  {
    id: "shanghai-exhibition-center",
    name: "上海展览中心",
    district: "静安区",
    types: ["历史人文", "城市漫步"],
    comfortTags: ["地铁方便", "少走路", "休息方便"],
    intro: "南京西路附近的标志性历史建筑，外观气势很强，适合和静安寺串联。",
    image: representativeImages.exhibition,
    recommendedFor: "不用花太久，但很能体现上海市中心的历史层次。",
    playSuggestion: "在延安中路一侧看建筑整体立面和尖塔，拍照后步行到南京西路或静安寺休息。",
    bestTime: "上午或下午",
    duration: "30-60 分钟",
    transit: "地铁 2/7/14 号线静安寺站或 2/12/13 号线南京西路站。",
    walkingLoad: "低：看外观为主。",
    restConvenience: "南京西路商圈餐饮和商场很多。",
    weatherFit: "晴天外观最好，小雨可短停。",
    bookingNote: "内部通常随展会开放，日常以外观参观为主。",
    nearby: ["静安寺", "南京西路", "张园"]
  },
  {
    id: "zhangyuan",
    name: "张园",
    district: "静安区",
    types: ["历史人文", "商圈休闲"],
    comfortTags: ["地铁方便", "雨天友好", "休息方便"],
    intro: "修缮后的石库门街区，适合看历史建筑与现代品牌空间结合。",
    image: imageFor("Zhang Yuan, Shanghai, China 2024 (54281266535).jpg"),
    recommendedFor: "比纯商场更有上海味道，也适合作为南京西路附近的休息点。",
    playSuggestion: "从南京西路进入张园，参观石库门里弄空间，拍建筑细节，再接吴江路或南京西路吃饭。",
    bestTime: "下午到晚上",
    duration: "1-1.5 小时",
    transit: "地铁 2/12/13 号线南京西路站。",
    walkingLoad: "低：街区集中。",
    restConvenience: "周边餐饮和商场非常方便。",
    weatherFit: "晴天街区好看，小雨也可逛。",
    bookingNote: "部分展览或店铺可能需要预约或排队。",
    nearby: ["南京西路", "上海展览中心", "静安寺"]
  },
  {
    id: "oriental-pearl",
    name: "东方明珠",
    district: "浦东区",
    types: ["地标夜景"],
    comfortTags: ["地铁方便", "夜景推荐", "需要预约", "休息方便"],
    intro: "浦东最具辨识度的城市地标之一，适合和陆家嘴环形天桥、滨江一起看。",
    image: representativeImages.orientalPearl,
    recommendedFor: "父母第一次来上海，看到东方明珠会很有到达感。",
    playSuggestion: "在陆家嘴环形天桥拍东方明珠全景，再根据体力决定是否购票登塔观景。",
    bestTime: "傍晚至夜间",
    duration: "外观 30-60 分钟；登塔约 2 小时",
    transit: "地铁 2/14 号线陆家嘴站。",
    walkingLoad: "低到中等：外观轻松，登塔需排队等候。",
    restConvenience: "正大广场、国金中心等商场近。",
    weatherFit: "晴天和夜景最佳；雾天登高视野会受影响。",
    bookingNote: "登塔需购票，节假日建议提前确认票务和排队时间。",
    nearby: ["陆家嘴滨江", "上海中心", "国金中心"]
  },
  {
    id: "shanghai-tower",
    name: "上海中心大厦",
    district: "浦东区",
    types: ["地标夜景"],
    comfortTags: ["地铁方便", "夜景推荐", "需要预约", "雨天友好"],
    intro: "上海最高楼，适合从陆家嘴近距离感受现代城市天际线。",
    image: imageFor("Shanghai Tower 2015.jpg"),
    recommendedFor: "和东方明珠、金茂、环球金融中心一起构成浦东最核心画面。",
    playSuggestion: "先在陆家嘴环形天桥拍照三件套外观，天气通透时再考虑登上海中心观光厅观景俯瞰城市。",
    bestTime: "下午到傍晚",
    duration: "外观 30 分钟；登高约 1.5-2 小时",
    transit: "地铁 2/14 号线陆家嘴站。",
    walkingLoad: "低到中等：外观轻松，登高需排队和室内步行。",
    restConvenience: "附近商场密集。",
    weatherFit: "晴天视野最好；雨雾天适合只看外观。",
    bookingNote: "观光厅需购票，天气不好时登高性价比下降。",
    nearby: ["东方明珠", "陆家嘴滨江", "国金中心"]
  },
  {
    id: "north-bund",
    name: "北外滩",
    district: "虹口区",
    types: ["地标夜景", "公园滨江"],
    comfortTags: ["夜景推荐", "休息方便"],
    intro: "黄浦江北岸视角，能同时看外滩、陆家嘴和苏州河口，视野开阔。",
    image: imageFor("Shanghai-Skyline-08-nachts-2012-gje.jpg"),
    recommendedFor: "比外滩主段人少一些，适合想拍城市天际线的傍晚。",
    playSuggestion: "在北外滩滨江步道观景拍照，看陆家嘴和外白渡桥方向，再去白玉兰广场休息。",
    bestTime: "傍晚至夜间",
    duration: "1-1.5 小时",
    transit: "地铁 12 号线国际客运中心站。",
    walkingLoad: "低到中等：滨江平坦，可只走一小段。",
    restConvenience: "白玉兰广场和周边商业可休息。",
    weatherFit: "晴天、夜景最佳；大风天体感较冷。",
    bookingNote: "无需预约；夜间注意返程路线。",
    nearby: ["外白渡桥", "上海邮政博物馆", "四川北路"]
  },
  {
    id: "century-park",
    name: "世纪公园",
    district: "浦东区",
    types: ["公园滨江"],
    comfortTags: ["少走路", "地铁方便", "休息方便"],
    intro: "浦东大型城市公园，湖面和草坪开阔，适合三天行程中安排一段舒缓时间。",
    image: imageFor("Century Park Shanghai.jpg"),
    recommendedFor: "如果父母想少逛商业街，这里适合散步、拍照和休息。",
    playSuggestion: "从地铁站附近入口进入，选湖边和草坪一段散步拍照，不建议全园走完。",
    bestTime: "上午或傍晚",
    duration: "1.5-2.5 小时",
    transit: "地铁 2 号线世纪公园站或上海科技馆站。",
    walkingLoad: "低到中等：园区很大，建议只走局部。",
    restConvenience: "园内有座椅，周边可接商场或餐厅。",
    weatherFit: "晴天、阴天适合；高温天建议上午。",
    bookingNote: "入园和活动规则可能调整，出行前确认。",
    nearby: ["上海科技馆", "陆家嘴", "花木商圈"]
  }
];

if (typeof window !== "undefined") {
  window.SHANGHAI_PARENT_TOUR_DATA = { ALLOWED_DISTRICTS, FILTERS, plans, attractions };
}

const state = {
  districts: new Set(),
  types: new Set(),
  comfort: new Set()
};

const elements = {};

function init() {
  elements.plans = document.querySelector("#plans");
  elements.filters = document.querySelector("#filters");
  elements.grid = document.querySelector("#attractionGrid");
  elements.resultCount = document.querySelector("#resultCount");
  elements.reset = document.querySelector("#resetFilters");
  elements.empty = document.querySelector("#emptyState");

  renderPlans();
  renderFilters();
  renderAttractions();
  elements.reset.addEventListener("click", resetFilters);
}

function renderPlans() {
  elements.plans.innerHTML = plans.map(plan => `
    <article class="plan-card">
      <div>
        <p class="plan-card__label">推荐路线</p>
        <h3>${plan.name}</h3>
        <p>${plan.summary}</p>
      </div>
      <dl>
        <div><dt>建议时间</dt><dd>${plan.bestTime}</dd></div>
        <div><dt>总时长</dt><dd>${plan.duration}</dd></div>
        <div><dt>路线</dt><dd>${plan.stops.join(" → ")}</dd></div>
        <div><dt>舒适度</dt><dd>${plan.comfort}</dd></div>
      </dl>
    </article>
  `).join("");
}

function renderFilters() {
  const groups = [
    ["districts", "行政区"],
    ["types", "景点类型"],
    ["comfort", "舒适度"]
  ];

  elements.filters.innerHTML = groups.map(([key, label]) => `
    <fieldset class="filter-group">
      <legend>${label}</legend>
      <div class="chip-row">
        ${FILTERS[key].map(value => `
          <button class="chip" type="button" data-filter-group="${key}" data-filter-value="${value}" aria-pressed="false">
            ${value}
          </button>
        `).join("")}
      </div>
    </fieldset>
  `).join("");

  elements.filters.addEventListener("click", event => {
    const button = event.target.closest("[data-filter-group]");
    if (!button) return;
    toggleFilter(button.dataset.filterGroup, button.dataset.filterValue);
  });
}

function toggleFilter(group, value) {
  if (state[group].has(value)) {
    state[group].delete(value);
  } else {
    state[group].add(value);
  }
  renderAttractions();
}

function getFilteredAttractions() {
  return attractions.filter(attraction => {
    const districtMatch = !state.districts.size || state.districts.has(attraction.district);
    const typeMatch = !state.types.size || attraction.types.some(type => state.types.has(type));
    const comfortMatch = !state.comfort.size || attraction.comfortTags.some(tag => state.comfort.has(tag));
    return districtMatch && typeMatch && comfortMatch;
  });
}

function resetFilters() {
  state.districts.clear();
  state.types.clear();
  state.comfort.clear();
  renderAttractions();
}

function renderAttractions() {
  const filtered = getFilteredAttractions();
  elements.resultCount.textContent = `当前显示 ${filtered.length} 个景点`;
  elements.empty.hidden = filtered.length > 0;
  elements.grid.innerHTML = filtered.map(renderAttractionCard).join("");
  syncFilterButtons();
}

function renderAttractionCard(attraction) {
  const tags = [...attraction.types, ...attraction.comfortTags].slice(0, 5);
  return `
    <article class="attraction-card">
      <div class="attraction-card__image">
        <img src="${attraction.image}" alt="${attraction.name}" loading="lazy" onerror="this.parentElement.classList.add('image-fallback'); this.remove();">
      </div>
      <div class="attraction-card__body">
        <div class="card-title-row">
          <h3>${attraction.name}</h3>
          <span>${attraction.district}</span>
        </div>
        <p class="intro">${attraction.intro}</p>
        <div class="tag-row">${tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        <p class="recommend">${attraction.recommendedFor}</p>
        <dl class="facts">
          <div><dt>推荐玩法</dt><dd>${attraction.playSuggestion}</dd></div>
          <div><dt>建议时间</dt><dd>${attraction.bestTime}</dd></div>
          <div><dt>游览时长</dt><dd>${attraction.duration}</dd></div>
          <div><dt>交通</dt><dd>${attraction.transit}</dd></div>
          <div><dt>体力</dt><dd>${attraction.walkingLoad}</dd></div>
          <div><dt>休息</dt><dd>${attraction.restConvenience}</dd></div>
          <div><dt>天气</dt><dd>${attraction.weatherFit}</dd></div>
          <div><dt>提醒</dt><dd>${attraction.bookingNote}</dd></div>
        </dl>
        <p class="nearby">附近可顺路：${attraction.nearby.join("、")}</p>
      </div>
    </article>
  `;
}

function syncFilterButtons() {
  document.querySelectorAll("[data-filter-group]").forEach(button => {
    const active = state[button.dataset.filterGroup].has(button.dataset.filterValue);
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.addEventListener("DOMContentLoaded", init);
