import { Link, useLocation, useNavigate, useSearchParams } from "@remix-run/react";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleClick = (route: string) => {
    navigate(`?${new URLSearchParams({ ...Object.fromEntries(searchParams), route }).toString()}`);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4 w-64">
      <h2 className="text-xl font-bold mb-4">導航</h2>
      <ul>
        <li>
          <button
            onClick={() => handleClick("/")}
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              location.pathname === "/" && !searchParams.get('route') ? "bg-blue-700" : ""
            }`}
          >
            首頁
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("about")}
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              searchParams.get('route') === "about" ? "bg-blue-700" : ""
            }`}
          >
            關於
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("services")}
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              searchParams.get('route') === "services" ? "bg-blue-700" : ""
            }`}
          >
            服務
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("contact")}
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              searchParams.get('route') === "contact" ? "bg-blue-700" : ""
            }`}
          >
            聯絡
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("form")}
            className={`block py-2 px-4 rounded hover:bg-blue-700 ${
              searchParams.get('route') === "form" ? "bg-blue-700" : ""
            }`}
          >
            表單
          </button>
        </li>
      </ul>
    </nav>
  );
}
