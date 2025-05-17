# ReactRemixLearning

## 專案描述

本專案使用Remix框架初始化，包含React和Tailwind CSS，並設計了兩欄式佈局。

## 功能

### 第1天：專案初始化與環境設置

- 使用Remix框架初始化專案
- 包含React和Tailwind CSS
- 設計了兩欄式佈局

### 第2天：導航欄與路由基礎

- 實現了二欄式佈局，左欄為靜態導航欄，右欄為內容顯示區域 (app/routes/_index.tsx, app/components/NavBar.tsx)。
- 導航欄包含首頁、關於、服務和聯絡連結 (app/components/NavBar.tsx)。
- 點擊導航連結後，右欄會顯示對應的內容 (app/routes/about.tsx, app/routes/services.tsx, app/routes/contact.tsx)。

### 第4天：右欄功能疊加顯示

- 設計右欄內容區域，根據左欄導航點擊顯示對應功能頁面 (app/components/ContentArea.tsx)。
- 支持功能疊加展示，新功能添加至右欄。
- 使用Tailwind CSS確保UI一致性。

### 第5天：簡單計數器功能

- 在首頁新增簡單計數器功能，讓使用者可以增加或減少計數 (app/components/Counter.tsx)。
- 計數器元件已整合至首頁內容中 (app/routes/_index.tsx)。

### 第6天：表單輸入與驗證

- 右欄添加表單，包含輸入欄位與基本驗證（例如必填） (app/components/Form.tsx, app/routes/form.tsx)。

### 第7天：API基礎與資料獲取

- 右欄顯示從公開API（例如JSONPlaceholder）獲取的資料 (app/routes/api.tsx, app/components/UserList.tsx)。

### 第8天：Prisma與資料庫設置

- 設置Prisma ORM，連接到SQLite資料庫，初始化用戶表 (prisma/schema.prisma)。

### 第9天：用戶資料CRUD - 創建

- 右欄實現用戶創建功能，保存到資料庫 (app/routes/users/create.tsx, app/components/CreateUser.tsx)。
## AI提示詞

### 第1天：專案初始化與環境設置

請使用Remix框架初始化一個Web專案，包含React、Tailwind CSS，並設計兩欄式佈局（左欄為導航，右欄為內容顯示區域）。提供完整的專案結構與index.html、app/routes/_index.tsx、app/root.tsx檔案內容。使用CDN引入React與Tailwind CSS

### 第2天：導航欄與路由基礎

在Remix專案中，於左欄實現靜態導航清單（包含首頁、關於等連結），右欄顯示對應路由內容。提供app/routes/_index.tsx與app/components/NavBar.tsx檔案，確保路由正確切換並使用Tailwind CSS美化導航

### 第4天：右欄功能疊加顯示

在Remix專案中，設計右欄內容區域，根據左欄導航點擊顯示對應功能頁面，並支持功能疊加展示（新功能添加至右欄）。提供app/components/ContentArea.tsx與相關路由邏輯，使用Tailwind CSS確保UI一致性

### 第5天：簡單計數器功能

在Remix專案中，於首頁新增簡單計數器功能，讓使用者可以增加或減少計數。提供app/components/Counter.tsx檔案，並確保計數器正確顯示於首頁內容中 (app/routes/_index.tsx)

### 第6天：表單輸入與驗證

在Remix專案的右欄實現一個表單組件，包含姓名、電子郵件欄位，並進行必填驗證。提供app/components/Form.tsx與app/routes/form.tsx，確保使用Remix表單處理與Tailwind CSS美化

### 第7天：API基礎與資料獲取

在Remix專案中，於右欄顯示從JSONPlaceholder API獲取的使用者清單。提供app/routes/api.tsx與app/components/UserList.tsx，使用Remix的loader函數處理資料獲取，並以Tailwind CSS展示清單

### 第8天：Prisma與資料庫設置

在Remix專案中配置Prisma ORM，連接到SQLite資料庫，創建用戶表（包含id、name、email欄位）。提供prisma/schema.prisma與初始化腳本，確保與Remix整合並更新README.md

### 第9天：用戶資料CRUD - 創建

在Remix專案的右欄添加用戶創建表單，透過Prisma將資料保存到SQLite資料庫。提供app/routes/users/create.tsx與app/components/CreateUser.tsx，確保表單驗證與Tailwind CSS美化
