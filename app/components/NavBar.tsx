import { Link, useLocation, useNavigate, useSearchParams } from "@remix-run/react";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4 w-64">
      <h2 className="text-xl font-bold mb-4">導航</h2>
      <ul>
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
      </ul>
    </nav>
  );
}
