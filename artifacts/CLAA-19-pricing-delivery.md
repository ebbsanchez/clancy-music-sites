# Clancy Website Design — 音樂人網站收費與交付架構

日期：2026-07-01  
網站入口：`/pricing/`

## 結論

Clancy 不應用頁數直接報價，而應販售四種不同責任範圍：

| 方案          |   建議售價 | 內部工時上限 | 客戶買到的核心價值                     |
| ------------- | ---------: | -----------: | -------------------------------------- |
| Starter       |     US$200 |         4–6h | 用既有模板快速取得正式官網             |
| Signature     |   US$2,000 |       35–50h | 符合藝人個性的客製網站與完整基本內容   |
| Campaign      |  US$10,000 |     160–220h | 可支援發片、巡演、媒體與轉換的營運系統 |
| Digital World | US$20,000+ |    300–450h+ | 網站本身就是可探索、可傳播的互動作品   |

主力方案應是 **US$2,000 Signature**。US$200 只能當產品化入口，不接受客製視覺、CMS 或反覆修改。US$10k 以上必須以里程碑管理；US$20k 以上先收付費 discovery／prototype，再決定完整製作價。

## Demo 對應

- **US$200**：Elias Wren；Riot Tenant 的簡化一頁式版本。
- **US$2,000**：Marin Circuit（完整內容基線）、Southbank Drift（編輯感）、Iris Vale（高辨識度視覺）。
- **US$10,000**：Mika Circuit 可延伸為發片 campaign；Marin Circuit 可升級 CMS、票務、電子報與商店整合。
- **US$20,000+**：Iris Vale／Mika Circuit 只能代表 art direction 起點；現有 Demo 本身不等於此價位。此級距的價值來自原創互動、3D、平台整合、多語與營運可靠度。

## 維運與後端原則

1. 網域、託管、CMS、分析與金流帳號由客戶持有並直接付款；Clancy 使用 collaborator 權限。
2. US$200 優先使用靜態託管，平台成本約 US$0–20/月，Clancy 維運 0–0.5h/月。
3. US$2k–10k 使用 managed CMS 或 headless CMS，平台成本約 US$20–100+/月，Clancy 維運 0.5–2h/月。
4. US$20k+ custom application 預留 US$100–1,000+/月與 4–12h/月，需要監控、預算告警、備份、runbook 與 SLA。
5. 更新服務另售：US$75/次（30 分鐘內）、US$200/月（最多 2 小時）、US$600+/月（成長與技術 retainer）。不承諾永久免費修改。

## 標準交付流程

1. **帳號與所有權**：列冊所有服務；客戶為 owner。
2. **功能驗收**：依 scope checklist 驗收裝置、表單、連結、SEO、效能與無障礙，取得書面 sign-off。
3. **操作教學**：US$2k 以上交付錄影與 60 分鐘教學，只開放安全的內容編輯權限。
4. **保固與維護**：合約寫明 bug 保固期、回應時間與新需求定義。
5. **封存退出**：交付 repo、設計檔、內容匯出、帳號清單與復原方式；收齊尾款。

## 商務護欄

- 50% 訂金排期、30% 設計方向確認、20% 上線前；US$200 可 100% 預付。
- 每個方案明列修訂輪數、客戶回覆期限與延期規則。
- scope 外需求用 change order 報價，不能以「順便」吸收。
- 第三方訂閱、字體、圖庫、金流、翻譯與內容製作獨立列項。
- 高價案不在原型前承諾固定總價；若客戶不買 discovery，不進入估價。

## 市場與成本來源

- Kane Design 的音樂人網站方案以 US$200 setup 作為市場上的低價入口案例：<https://kane-design.com/artist-website-package/>
- Showman Media 的音樂人網站公開方案由 €2,000 起：<https://showman-media.com/web-design/>
- Bandzoogle 2026 音樂人自助平台約 US$6.95–22/月，是低價客戶的替代品：<https://bandzoogle.com/help/articles/363-bandzoogle-pricing>
- Vercel 公開價格為 Hobby US$0、Pro US$20/月，適合作為 managed hosting 成本基線：<https://vercel.com/pricing>
- Webflow 於 2026-05 調整方案，證明第三方平台價格會變動，報價不應永久包住平台費：<https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026>
- Stripe 美國卡交易公開基線為 2.9% + US$0.30；電商案需把交易成本告知客戶：<https://stripe.com/pricing>

所有第三方價格都應在正式提案日重新確認。以上不是稅務或法律建議，正式合約與跨境稅務應由所在地專業人士審閱。
