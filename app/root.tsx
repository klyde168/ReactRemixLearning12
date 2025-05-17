import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import NavBar from "~/components/NavBar";
import tailwindStyles from "~/tailwind.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Root() {
  return (
    <html lang="zh-TW">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="stylesheet" href={tailwindStyles} />
      </head>
      <body className="h-screen flex">
        {/* 導航欄 */}
        <NavBar />

        {/* 內容顯示區域 */}
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Content Area</h1>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}