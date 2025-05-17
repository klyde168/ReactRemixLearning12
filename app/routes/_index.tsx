import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import NavBar from "~/components/NavBar";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to our homepage!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex bg-gray-900 text-white">
  

      {/* 內容顯示區域 */}
      <div className="flex-1 p-4 bg-gray-800">
        <h1 className="text-2xl font-bold mb-4">Content Area</h1>
        <Outlet />
      </div>
    </div>
  );
}
