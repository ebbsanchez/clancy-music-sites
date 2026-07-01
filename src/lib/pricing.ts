export type PricingTier = {
  id: string;
  eyebrow: string;
  price: string;
  fit: string;
  promise: string;
  hours: string;
  weeks: string;
  marginGuardrail: string;
  accent: string;
  deliverables: string[];
  exclusions: string[];
  workflow: { label: string; value: string }[];
  demos: { slug: string; name: string; note: string }[];
};

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    eyebrow: '01 / Productized',
    price: '$200',
    fit: '剛起步、只需要正式連結的音樂人',
    promise: '把 Link-in-bio 升級成一頁式官方網站；快、清楚、沒有客製開發。',
    hours: '4–6 小時',
    weeks: '3–5 個工作天',
    marginGuardrail: '超過 6 小時就停止獲利；必須模板化',
    accent: 'lime',
    deliverables: [
      '1 頁式網站',
      '既有模板擇一',
      '音樂／社群／聯絡連結',
      '手機版與基礎 SEO',
      '1 次文字／圖片修訂',
      '靜態託管交接',
    ],
    exclusions: ['客製視覺方向', 'CMS 後台', '商店／會員', '文案與攝影製作'],
    workflow: [
      { label: '資料檢查', value: '0.5h' },
      { label: '套版與內容', value: '2.5h' },
      { label: 'QA／修訂', value: '1.5h' },
      { label: '上線／交接', value: '0.5h' },
    ],
    demos: [
      { slug: 'elias-wren', name: 'Elias Wren', note: '最適合縮成安靜的一頁式版本' },
      { slug: 'punk-zine', name: 'Riot Tenant', note: '保留字體與海報感，移除複雜互動' },
    ],
  },
  {
    id: 'signature',
    eyebrow: '02 / Core offer',
    price: '$2,000',
    fit: '有作品、演出與媒體需求的職業音樂人',
    promise: '一個真正像「這位音樂人」的網站，而不是換色模板。',
    hours: '35–50 小時',
    weeks: '3–5 週',
    marginGuardrail: '以 40h 為報價基線；變更需求需 change order',
    accent: 'coral',
    deliverables: [
      '客製 art direction',
      '最多 6 個頁面／內容區',
      '音樂、演出、Bio、EPK、聯絡',
      '輕量 CMS 或結構化內容',
      '2 輪設計修訂',
      '分析、SEO、效能 QA',
      '60 分鐘後台教學',
    ],
    exclusions: ['品牌識別全案', '複雜商務邏輯', '多語系', '大量資料遷移'],
    workflow: [
      { label: 'Discovery', value: '4h' },
      { label: '方向／設計', value: '12h' },
      { label: '開發', value: '20h' },
      { label: '內容／QA', value: '8h' },
      { label: '交接', value: '2h' },
    ],
    demos: [
      { slug: 'marin-circuit', name: 'Marin Circuit', note: '完整音樂人資訊架構的最佳基線' },
      { slug: 'southbank-drift', name: 'Southbank Drift', note: '編輯感與場景敘事' },
      { slug: 'liquid-glass', name: 'Iris Vale', note: '較高辨識度的視覺方向' },
    ],
  },
  {
    id: 'campaign',
    eyebrow: '03 / Campaign system',
    price: '$10,000',
    fit: '發片期、經紀公司、需要可長期運作的藝人品牌',
    promise: '不是單一網站，而是一套可支援發片、巡演、媒體與轉換的數位系統。',
    hours: '160–220 小時',
    weeks: '8–12 週',
    marginGuardrail: '里程碑驗收；第三方與內容製作分開報價',
    accent: 'violet',
    deliverables: [
      '研究與數位策略',
      '完整客製 UI／動態系統',
      'CMS 內容模型與權限',
      '發片、巡演、EPK、Press archive',
      '商店／票務／電子報整合',
      '雙語基礎架構',
      '無障礙與效能驗收',
      '90 天保固',
    ],
    exclusions: ['大型 3D 世界', '自建票務／金流平台', '全年無限維護', '音樂／影像內容製作'],
    workflow: [
      { label: '策略研究', value: '24h' },
      { label: 'UX／內容模型', value: '32h' },
      { label: '視覺與動態', value: '50h' },
      { label: '工程與整合', value: '80h' },
      { label: 'QA／上線', value: '24h' },
    ],
    demos: [
      { slug: 'anime-pop', name: 'Mika Circuit', note: '可延伸為發片 campaign 的強識別系統' },
      { slug: 'marin-circuit', name: 'Marin Circuit', note: '將現有模組升級成 CMS 與行銷整合' },
    ],
  },
  {
    id: 'world',
    eyebrow: '04 / Digital world',
    price: '$20,000+',
    fit: '國際發行、品牌合作、需要旗艦數位體驗的藝人',
    promise: '可被媒體報導、被粉絲探索的互動作品；網站本身就是 campaign。',
    hours: '300–450+ 小時',
    weeks: '14–24 週',
    marginGuardrail: '先付費 discovery；原型通過後才鎖定製作價',
    accent: 'blue',
    deliverables: [
      '付費 discovery／技術原型',
      '原創互動敘事或 3D/WebGL',
      '多語系與全球 CDN',
      '進階 CMS／權限／審稿流程',
      '商務、CRM、數據整合',
      '負載、裝置、無障礙 QA',
      '監控與 incident runbook',
      '3–6 個月營運方案',
    ],
    exclusions: [
      '未經原型驗證的固定總價',
      '第三方授權費',
      '24/7 支援（另簽 SLA）',
      '無上限內容輸入',
    ],
    workflow: [
      { label: 'Discovery／prototype', value: '60h' },
      { label: 'Experience design', value: '90h' },
      { label: 'Creative development', value: '180h' },
      { label: '平台整合', value: '70h' },
      { label: 'Hardening／launch', value: '50h' },
    ],
    demos: [
      {
        slug: 'liquid-glass',
        name: 'Iris Vale',
        note: '僅作 art direction 起點；目前 demo 不等於 $20k scope',
      },
      { slug: 'anime-pop', name: 'Mika Circuit', note: '可發展成可探索的專輯世界與互動內容' },
    ],
  },
];

export const operations = [
  {
    model: 'Static / client-owned',
    bestFor: '$200',
    monthly: '$0–20',
    internal: '0–0.5h/月',
    detail: 'GitHub Pages／Cloudflare Pages；客戶持有網域與帳號。更新以付費小單處理。',
  },
  {
    model: 'Managed CMS',
    bestFor: '$2k–10k',
    monthly: '$20–100+',
    internal: '0.5–2h/月',
    detail: 'Webflow、Squarespace 或 headless CMS。訂閱由客戶付款，Clancy 保留協作者權限。',
  },
  {
    model: 'Custom application',
    bestFor: '$20k+',
    monthly: '$100–1,000+',
    internal: '4–12h/月',
    detail: 'Vercel／Cloudflare + CMS + 監控。需要預算上限、告警、備份與 SLA。',
  },
];
