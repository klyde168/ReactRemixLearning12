# ReactRemixLearning

## 專案描述

本專案使用Remix框架初始化，包含React和Tailwind CSS，並設計了兩欄式佈局。

## 備註

第1天：專案初始化與環境設置

第2天：導航欄與路由基礎

## 功能

### 第1天：專案初始化與環境設置

- 使用Remix框架初始化專案
- 包含React和Tailwind CSS
- 設計了兩欄式佈局

### 第2天：導航欄與路由基礎

- 實現了二欄式佈局，左欄為靜態導航欄，右欄為內容顯示區域 (app/routes/_index.tsx, app/components/NavBar.tsx)。
- 導航欄包含首頁、關於、服務和聯絡連結 (app/components/NavBar.tsx)。
- 點擊導航連結後，右欄會顯示對應的內容 (app/routes/about.tsx, app/routes/services.tsx, app/routes/contact.tsx)。

## AI提示詞

### 第1天：專案初始化與環境設置

請使用Remix框架初始化一個Web專案，包含React、Tailwind CSS，並設計兩欄式佈局（左欄為導航，右欄為內容顯示區域）。提供完整的專案結構與index.html、app/routes/_index.tsx、app/root.tsx檔案內容。使用CDN引入React與Tailwind CSS

### 第2天：導航欄與路由基礎

在Remix專案中，於左欄實現靜態導航清單（包含首頁、關於等連結），右欄顯示對應路由內容。提供app/routes/_index.tsx與app/components/NavBar.tsx檔案，確保路由正確切換並使用Tailwind CSS美化導航
