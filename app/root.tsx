import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import tailwindStyles from "~/tailwind.css?url";
import NavBar from "~/components/NavBar";

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
  <NavBar />
  <Outlet />
  <ScrollRestoration />
  <Scripts />
  <LiveReload />
      </body>
    </html>
  );
}
