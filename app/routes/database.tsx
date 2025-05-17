import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const meta: MetaFunction = () => {
  return [
    { title: "資料庫頁面" },
    { name: "description", content: "從資料庫獲取資料" },
  ];
};

export const loader: LoaderFunction = async () => {
  const users = await prisma.user.findMany();
  return json(users);
};

export default function DatabasePage() {
  const users = useLoaderData<any[]>();

  return (
    /* 資料庫頁面，使用深灰色背景和白色文字，顯示從資料庫獲取的使用者資料 */
    <div className="flex-1 p-4 bg-gray-800 text-white">
      {/* 頁面標題 */}
      <h1 className="text-3xl font-bold mb-6">資料庫資料</h1>
      {/* 使用者清單容器 */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md w-full">
        {/* 清單標題 */}
        <h2 className="text-2xl font-bold mb-4">使用者清單</h2>
        {users && users.length > 0 ? (
          /* 如果有使用者資料，顯示使用者清單 */
          <ul className="space-y-2">
            {users.map((user) => (
              /* 每個使用者的資料項目 */
              <li key={user.id} className="p-2 bg-gray-800 rounded">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-300">{user.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          /* 如果沒有使用者資料，顯示提示訊息 */
          <p>沒有找到使用者資料。</p>
        )}
      </div>
    </div>
  );
}
