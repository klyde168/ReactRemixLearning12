import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import UserList from "~/components/UserList";

export const meta: MetaFunction = () => {
  return [
    { title: "API 資料頁面" },
    { name: "description", content: "從 API 獲取資料" },
  ];
};

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return json(users);
};

export default function ApiPage() {
  return (
    <div className="flex-1 p-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">API 資料獲取</h1>
      <UserList />
    </div>
  );
}
