import { Link } from "@remix-run/react";
import { useLocation } from "@remix-run/react";

export default function NavBar() {
  const location = useLocation();
  const routes = [
    { path: "/", name: "首頁" },
    { path: "/about", name: "關於" },
    { path: "/services", name: "服務" },
    { path: "/contact", name: "聯絡" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-64 bg-gray-800 text-white h-full fixed top-0 left-0 flex flex-col shadow-lg">
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-2xl font-bold">導航選單</h1>
      </div>
      <ul className="flex flex-col mt-4">
        {routes.map((route) => (
          <li
            key={route.path}
            className={`px-5 py-3 ${
              isActive(route.path) ? "bg-gray-700" : "hover:bg-gray-700"
            } transition-colors`}
          >
            <Link
              to={route.path}
              className="block w-full text-white no-underline"
              onClick={() => console.log(`Navigating to ${route.path}`)}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}