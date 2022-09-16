
export interface Translations {
    en: string;
    fr: string;
    it: string;
    de: string;
    es: string;
    pt: string;
    ru: string;
    pl: string;
    uk: string;
    tr: string;
    ja: string;
    zh: string;
    ko: string;
    tc: string;
}

export interface News {
    id: string;
    message: string;
    link: string;
    imageLink: string;
    priority: boolean;
    date: Date;
    eta: string;
    update: boolean;
    primeAccess: boolean;
    stream: boolean;
    translations: Translations;
    asString: string;
}

export interface Variant {
    missionType: string;
    modifier: string;
    modifierDescription: string;
    node: string;
}

export interface Sortie {
    id: string;
    activation: Date;
    startString: string;
    expiry: Date;
    active: boolean;
    rewardPool: string;
    variants: Variant[];
    missions: any[];
    boss: string;
    faction: string;
    expired: boolean;
    eta: string;
}

export interface Job {
    id: string;
    rewardPool: string[];
    type: string;
    enemyLevels: number[];
    standingStages: number[];
    minMR: number;
    expiry: Date;
    timeBound: string;
    isVault?: boolean;
    locationTag: string;
    timeBoound: string;
}

export interface SyndicateMission {
    id: string;
    activation: Date;
    startString: string;
    expiry: Date;
    active: boolean;
    syndicate: string;
    syndicateKey: string;
    nodes: string[];
    jobs: Job[];
    eta: string;
}

export interface Fissure {
    id: string;
    activation: Date;
    startString: string;
    expiry: Date;
    active: boolean;
    node: string;
    missionType: string;
    missionKey: string;
    enemy: string;
    enemyKey: string;
    nodeKey: string;
    tier: string;
    tierNum: number;
    expired: boolean;
    eta: string;
    isStorm: boolean;
    isHard: boolean;
}

export interface FlashSale {
    item: string;
    expiry: Date;
    activation: Date;
    discount: number;
    regularOverride: number;
    premiumOverride: number;
    isShownInMarket: boolean;
    isFeatured: boolean;
    isPopular: boolean;
    id: string;
    expired: boolean;
    eta: string;
}

export interface CountedItem {
    count: number;
    type: string;
    key: string;
}

export interface AttackerReward {
    items: any[];
    countedItems: CountedItem[];
    credits: number;
    asString: string;
    itemString: string;
    thumbnail: string;
    color: number;
}

export interface CountedItem2 {
    count: number;
    type: string;
    key: string;
}

export interface Reward {
    items: any[];
    countedItems: CountedItem2[];
    credits: number;
    asString: string;
    itemString: string;
    thumbnail: string;
    color: number;
}

export interface Attacker {
    reward: Reward;
    faction: string;
    factionKey: string;
}

export interface CountedItem3 {
    count: number;
    type: string;
    key: string;
}

export interface DefenderReward {
    items: any[];
    countedItems: CountedItem3[];
    credits: number;
    asString: string;
    itemString: string;
    thumbnail: string;
    color: number;
}

export interface CountedItem4 {
    count: number;
    type: string;
    key: string;
}

export interface Reward2 {
    items: any[];
    countedItems: CountedItem4[];
    credits: number;
    asString: string;
    itemString: string;
    thumbnail: string;
    color: number;
}

export interface Defender {
    reward: Reward2;
    faction: string;
    factionKey: string;
}

export interface Invasion {
    id: string;
    activation: Date;
    startString: string;
    node: string;
    nodeKey: string;
    desc: string;
    attackerReward: AttackerReward;
    attackingFaction: string;
    attacker: Attacker;
    defenderReward: DefenderReward;
    defendingFaction: string;
    defender: Defender;
    vsInfestation: boolean;
    count: number;
    requiredRuns: number;
    completion: number;
    completed: boolean;
    eta: string;
    rewardTypes: string[];
}

export interface VoidTrader {
    id: string;
    activation: Date;
    startString: string;
    expiry: Date;
    active: boolean;
    character: string;
    location: string;
    inventory: any[];
    psId: string;
    endString: string;
    initialStart: Date;
    schedule: any[];
}

export interface DailyDeal {
    item: string;
    expiry: Date;
    activation: Date;
    originalPrice: number;
    salePrice: number;
    total: number;
    sold: number;
    id: string;
    eta: string;
    discount: number;
}

export interface Simaris {
    target: string;
    isTargetActive: boolean;
    asString: string;
}

export interface ConclaveChallenge {
    id: string;
    expiry: Date;
    activation: Date;
    amount: number;
    mode: string;
    category: string;
    eta: string;
    expired: boolean;
    daily: boolean;
    rootChallenge: boolean;
    endString: string;
    description: string;
    title: string;
    standing: number;
    asString: string;
}

export interface EarthCycle {
    id: string;
    expiry: Date;
    activation: Date;
    isDay: boolean;
    state: string;
    timeLeft: string;
}

export interface CetusCycle {
    id: string;
    expiry: Date;
    activation: Date;
    isDay: boolean;
    state: string;
    timeLeft: string;
    isCetus: boolean;
    shortString: string;
}

export interface CambionCycle {
    id: string;
    activation: Date;
    expiry: Date;
    timeLeft: string;
    active: string;
}

export interface ZarimanCycle {
    id: string;
    bountiesEndDate: Date;
    expiry: Date;
    activation: Date;
    isCorpus: boolean;
    state: string;
    timeLeft: string;
    shortString: string;
}

export interface ConstructionProgress {
    id: string;
    fomorianProgress: string;
    razorbackProgress: string;
    unknownProgress: string;
}

export interface VallisCycle {
    id: string;
    expiry: Date;
    isWarm: boolean;
    state: string;
    activation: Date;
    timeLeft: string;
    shortString: string;
}

export interface Params {
}

export interface ActiveChallenge {
    id: string;
    activation: Date;
    startString: string;
    expiry: Date;
    active: boolean;
    isDaily: boolean;
    isElite: boolean;
    desc: string;
    title: string;
    reputation: number;
}

export interface Nightwave {
    id: string;
    activation: Date;
    startString: string;
    expiry: Date;
    active: boolean;
    season: number;
    tag: string;
    phase: number;
    params: Params;
    possibleChallenges: any[];
    activeChallenges: ActiveChallenge[];
    rewardTypes: string[];
}

export interface Arbitration {
}

export interface Mission {
    node: string;
    faction: string;
    type: string;
}

export interface SentientOutposts {
    mission: Mission;
    activation: Date;
    expiry: Date;
    active: boolean;
    id: string;
}

export interface CurrentReward {
    name: string;
    cost: number;
}

export interface Rotation {
    name: string;
    cost: number;
}

export interface Evergreen {
    name: string;
    cost: number;
}

export interface Incursions {
    id: string;
    activation: Date;
    expiry: Date;
}

export interface SteelPath {
    currentReward: CurrentReward;
    activation: Date;
    expiry: Date;
    remaining: string;
    rotation: Rotation[];
    evergreens: Evergreen[];
    incursions: Incursions;
}

export interface Inventory {
    item: string;
    ducats?: number;
    credits?: number;
}

export interface Schedule {
    expiry: Date;
    item: string;
}

export interface VaultTrader {
    id: string;
    activation: Date;
    startString: string;
    expiry: Date;
    active: boolean;
    character: string;
    location: string;
    inventory: Inventory[];
    psId: string;
    endString: string;
    initialStart: Date;
    completed: boolean;
    schedule: Schedule[];
}

export interface Mission2 {
    node: string;
    nodeKey: string;
    type: string;
    typeKey: string;
    nightmare: boolean;
    archwingRequired: boolean;
    isSharkwing: boolean;
    advancedSpawners: any[];
    requiredItems: any[];
    levelAuras: any[];
}

export interface ArchonHunt {
    id: string;
    activation: Date;
    startString: string;
    expiry: Date;
    active: boolean;
    rewardPool: string;
    variants: any[];
    missions: Mission2[];
    boss: string;
    faction: string;
    expired: boolean;
    eta: string;
}

export interface WarframeData {
    timestamp: Date;
    news: News[];
    events: any[];
    alerts: any[];
    sortie: Sortie;
    syndicateMissions: SyndicateMission[];
    fissures: Fissure[];
    globalUpgrades: any[];
    flashSales: FlashSale[];
    invasions: Invasion[];
    darkSectors: any[];
    voidTrader: VoidTrader;
    dailyDeals: DailyDeal[];
    simaris: Simaris;
    conclaveChallenges: ConclaveChallenge[];
    persistentEnemies: any[];
    earthCycle: EarthCycle;
    cetusCycle: CetusCycle;
    cambionCycle: CambionCycle;
    zarimanCycle: ZarimanCycle;
    weeklyChallenges: any[];
    constructionProgress: ConstructionProgress;
    vallisCycle: VallisCycle;
    nightwave: Nightwave;
    kuva: any[];
    arbitration: Arbitration;
    sentientOutposts: SentientOutposts;
    steelPath: SteelPath;
    vaultTrader: VaultTrader;
    archonHunt: ArchonHunt;
}



