import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import CreateUser from "~/components/CreateUser";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const meta: MetaFunction = () => {
  return [
    { title: "創建用戶頁面" },
    { name: "description", content: "創建新用戶並保存到資料庫" },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  if (request.method === "POST") {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
        },
      });
      return json({ user });
    } catch (error) {
      return json({ error: "創建用戶時發生錯誤" }, { status: 500 });
    }
  }
  return json({ error: "不支援的方法" }, { status: 405 });
};

export default function CreateUserPage() {
  return (
    /* 創建用戶頁面，使用深灰色背景和白色文字，顯示用戶創建表單 */
    <div className="flex-1 p-4 bg-gray-800 text-white">
      {/* 頁面標題 */}
      <h1 className="text-3xl font-bold mb-6">創建新用戶</h1>
      {/* 創建用戶表單元件 */}
      <CreateUser onCreate={async (user) => {
        /* 處理用戶創建的函數，透過 fetch 發送 POST 請求到伺服器端 */
        const response = await fetch('/users/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            name: user.name,
            email: user.email,
          }),
        });
        if (!response.ok) {
          throw new Error('創建用戶時發生錯誤');
        }
      }} />
    </div>
  );
}
