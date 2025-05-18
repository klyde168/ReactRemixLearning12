import { Link, useLocation } from "@remix-run/react";

/**
 * 導航欄組件
 * 這個組件負責顯示應用程式的導航欄，包含多個頁面的連結。
 * 當前頁面會在導航欄中高亮顯示。
 */
export default function NavBar() {
  const location = useLocation();

  return (
    /* 導航欄元件，使用漸層背景色從藍色到紫色，設置為白色文字和固定寬度 */
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4 w-64 h-full fixed top-0 left-0 flex flex-col shadow-lg">
      {/* 導航欄標題 */}
      <h2 className="text-xl font-bold mb-4">導航</h2>
      {/* 導航選項清單 */}
      <ul className="flex flex-col">
        {/* 首頁導航選項，當前路徑為首頁時高亮顯示 */}
        <li>
          <Link
            to="/"
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              location.pathname === "/" ? "bg-blue-700" : ""
            }`}
          >
            首頁
          </Link>
        </li>
        {/* 關於導航選項，當前路徑為關於頁面時高亮顯示 */}
        <li>
          <Link
            to="/about"
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              location.pathname === "/about" ? "bg-blue-700" : ""
            }`}
          >
            關於
          </Link>
        </li>
        {/* 服務導航選項，當前路徑為服務頁面時高亮顯示 */}
        <li>
          <Link
            to="/services"
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              location.pathname === "/services" ? "bg-blue-700" : ""
            }`}
          >
            服務
          </Link>
        </li>
        {/* 聯絡導航選項，當前路徑為聯絡頁面時高亮顯示 */}
        <li>
          <Link
            to="/contact"
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              location.pathname === "/contact" ? "bg-blue-700" : ""
            }`}
          >
            聯絡
          </Link>
        </li>
        {/* 表單導航選項，當前路徑為表單頁面時高亮顯示 */}
        <li>
          <Link
            to="/form"
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              location.pathname === "/form" ? "bg-blue-700" : ""
            }`}
          >
            表單
          </Link>
        </li>
        {/* API 資料導航選項，當前路徑為 API 頁面時高亮顯示 */}
        <li>
          <Link
            to="/api"
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              location.pathname === "/api" ? "bg-blue-700" : ""
            }`}
          >
            API 資料
          </Link>
        </li>
        {/* 資料庫導航選項，當前路徑為資料庫頁面時高亮顯示 */}
        <li>
          <Link
            to="/database"
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              location.pathname === "/database" ? "bg-blue-700" : ""
            }`}
          >
            資料庫
          </Link>
        </li>
        {/* 創建用戶導航選項，當前路徑為創建用戶頁面時高亮顯示 */}
        <li>
          <Link
            to="/users/create"
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              location.pathname === "/users/create" ? "bg-blue-700" : ""
            }`}
          >
            創建用戶
          </Link>
        </li>
      </ul>
    </nav>
  );
}
