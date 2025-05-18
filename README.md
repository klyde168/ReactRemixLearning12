# Remix 專案
第3天：動態導航連結
- 這是一個使用 Remix 框架建立的網頁應用程式，包含了動態垂直導航選單和其他功能。
- **動態生成連結**：導航選單根據定義的路由列表動態生成，包含首頁、關於、服務和聯絡等頁面。
- **當前頁面高亮**：使用 `useLocation` 鉤子來檢查當前路徑是否與連結匹配，並應用不同的背景顏色以高亮選中項目。
- **內容區域顯示**：內容區域使用 `Outlet` 組件顯示路由對應的內容，並使用 Tailwind CSS 進行樣式調整。

第7天：API基礎與資料獲取
- 垂直導航顯示從公開API（例如JSONPlaceholder）獲取的資料。
- **API 路由建立**：學習如何在 Remix 中建立 API 路由以處理後端請求，例如在 `app/routes/api.tsx` 中定義 API 端點。
- **資料獲取**：使用 `useLoaderData` 鉤子從 API 路由或其他來源獲取資料，並將其傳遞給組件進行渲染。
- **資料顯示**：在前端組件中動態顯示從 API 獲取的資料，例如在 `app/components/UserList.tsx` 中顯示用戶列表。

第8天：Prisma與資料庫設置
- 垂直導航顯示從公開API（例如JSONPlaceholder）獲取的資料。
- **功能**：設置Prisma ORM，連接到SQLite資料庫，初始化用戶表。
- **AI提示詞**：在Remix專案中配置Prisma ORM，連接到SQLite資料庫，創建用戶表（包含id、name、email欄位）。提供prisma/schema.prisma與初始化腳本，確保與Remix整合並更新README.md。新增程式註解說明，使用標準的 JavaScript 註解格式。

## 相關檔案

- `app/components/NavBar.tsx`：包含垂直導航選單的組件，實現動態生成連結和高亮功能。
- `app/root.tsx`：應用程式主要入口，整合導航選單和內容區域。
- `app/routes/_index.tsx`, `app/routes/about.tsx`, `app/routes/services.tsx`, `app/routes/contact.tsx`：各個路由頁面，顯示對應的內容。

