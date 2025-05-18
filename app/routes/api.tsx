import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

/**
 * API 資料頁面
 * 這個頁面負責從外部 API 獲取使用者資料並顯示。
 */

// 定義使用者資料的類型
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// 定義loader資料的類型
export interface LoaderData {
  users: User[];
  error?: string;
}

// 定義 loader 函數用於從 JSONPlaceholder API 獲取使用者資料
/**
 * Loader 函數，從 JSONPlaceholder API 獲取使用者資料。
 * 如果成功獲取資料，則返回使用者清單；如果失敗，則返回錯誤訊息。
 */
export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    return json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return json({ error: "Failed to fetch users" }, { status: 500 });
  }
};

// 引入UserList組件
import UserList from "~/components/UserList";

// 預設導出的組件，用於渲染頁面
/**
 * API 頁面組件
 * 這個組件負責渲染 API 資料頁面，包含使用者清單組件。
 */
export default function Api() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API 使用者資料</h1>
      <UserList />
    </div>
  );
}
