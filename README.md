# Remix 專案
第3天：動態導航連結
- 這是一個使用 Remix 框架建立的網頁應用程式，包含了動態垂直導航選單和其他功能。

第4天：API基礎與資料獲取
- 垂直導航顯示從公開API（例如JSONPlaceholder）獲取的資料。

## 功能說明

### 第3天：動態導航連結

- **動態生成連結**：導航選單根據定義的路由列表動態生成，包含首頁、關於、服務和聯絡等頁面。
- **當前頁面高亮**：使用 `useLocation` 鉤子來檢查當前路徑是否與連結匹配，並應用不同的背景顏色以高亮選中項目。
- **內容區域顯示**：內容區域使用 `Outlet` 組件顯示路由對應的內容，並使用 Tailwind CSS 進行樣式調整。

### 第7天：API基礎與資料獲取

- **API 路由建立**：學習如何在 Remix 中建立 API 路由以處理後端請求，例如在 `app/routes/api.tsx` 中定義 API 端點。
- **資料獲取**：使用 `useLoaderData` 鉤子從 API 路由或其他來源獲取資料，並將其傳遞給組件進行渲染。
- **資料顯示**：在前端組件中動態顯示從 API 獲取的資料，例如在 `app/components/UserList.tsx` 中顯示用戶列表。

## 相關檔案

- `app/components/NavBar.tsx`：包含垂直導航選單的組件，實現動態生成連結和高亮功能。
- `app/root.tsx`：應用程式主要入口，整合導航選單和內容區域。
- `app/routes/_index.tsx`, `app/routes/about.tsx`, `app/routes/services.tsx`, `app/routes/contact.tsx`：各個路由頁面，顯示對應的內容。

## AI 提示詞
### 第3天：動態導航連結
- 修改 Remix 專案的垂直導航，使其根據路由動態生成連結，並高亮當前頁面。提供 `app/components/NavBar.tsx` 與相關路由檔案，使用 React 狀態管理與 Tailwind CSS 實現高亮效果。新增程式註解說明，使用標準的 JavaScript 註解格式。

### 第7天：API基礎與資料獲取
- 為 Remix 專案中的所有路由和組件檔案新增標準的 JavaScript 註解說明，確保每個檔案都有頂層函數或組件的說明註解，並更新 README.md 中的 AI 提示詞部分。
