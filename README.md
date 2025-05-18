# Remix 學習筆記
## 第3天：動態導航連結
- **功能**：動態生成連結：導航選單根據定義的路由列表動態生成，包含首頁、關於、服務和聯絡等頁面。
- **功能**：當前頁面高亮：使用 useLocation 鉤子來檢查當前路徑是否與連結匹配，並應用不同的背景顏色以高亮選中項目。
- **功能**：內容區域顯示：內容區域使用 Outlet 組件顯示路由對應的內容，並使用 Tailwind CSS 進行樣式調整。

## 第7天：API基礎與資料獲取
- **功能**：API 路由建立：學習如何在 Remix 中建立 API 路由以處理後端請求，例如在 app/routes/api.- **功能**：tsx 中定義 API 端點。
- **功能**：資料獲取：使用 useLoaderData 鉤子從 API 路由或其他來源獲取資料，並將其傳遞給組件進行渲染。
- **功能**：資料顯示：在前端組件中動態顯示從 API 獲取的資料，例如在 app/components/UserList.tsx 中顯示用戶列表。

## 第10天：用戶資料CRUD - 讀取
- **功能**：右欄顯示用戶清單，從資料庫讀取。
- **AI提示詞**：在Remix專案的NavBar.tsx新增連結，右欄顯示從SQLite資料庫讀取的用戶清單，透過Prisma查詢。提供app/routes/users.tsx與app/components/UserList.tsx，使用Tailwind CSS美化清單顯示。新增程式註解說明，使用標準的 JavaScript 註解格式

