# Remix 專案
第3天：動態導航連結
- 這是一個使用 Remix 框架建立的網頁應用程式，包含了動態垂直導航選單和其他功能。

## 功能說明

### 垂直導航選單

- **動態生成連結**：導航選單根據定義的路由列表動態生成，包含首頁、關於、服務和聯絡等頁面。
- **當前頁面高亮**：使用 `useLocation` 鉤子來檢查當前路徑是否與連結匹配，並應用不同的背景顏色以高亮選中項目。
- **內容區域顯示**：內容區域使用 `Outlet` 組件顯示路由對應的內容，並使用 Tailwind CSS 進行樣式調整。

## 相關檔案

- `app/components/NavBar.tsx`：包含垂直導航選單的組件，實現動態生成連結和高亮功能。
- `app/root.tsx`：應用程式主要入口，整合導航選單和內容區域。
- `app/routes/_index.tsx`, `app/routes/about.tsx`, `app/routes/services.tsx`, `app/routes/contact.tsx`：各個路由頁面，顯示對應的內容。

## AI 提示詞

- 修改 Remix 專案的垂直導航，使其根據路由動態生成連結，並高亮當前頁面。提供 `app/components/NavBar.tsx` 與相關路由檔案，使用 React 狀態管理與 Tailwind CSS 實現高亮效果。新增程式註解說明，使用標準的 JavaScript 註解格式。
