import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

import NavBar from "./components/NavBar";

/**
 * App 組件，作為應用程式的主要入口
 * 包含垂直導航選單和內容區域
 */
export default function App() {
  return (
    <div className="flex">
      {/* 垂直導航選單 */}
      <NavBar />
      {/* 內容區域，顯示路由對應的內容 */}
      {/*<main className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">*/}
        <main className="ml-64 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
