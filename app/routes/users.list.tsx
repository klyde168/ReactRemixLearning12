import { LoaderFunction, json, ActionFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";
import UserList from "../components/UserList";

/**
 * 用戶清單路由
 * 這個路由負責從SQLite資料庫讀取用戶資料，並將其顯示在頁面上。
 * 它使用Prisma作為ORM來與資料庫互動。
 */

const prisma = new PrismaClient();

export const loader: LoaderFunction = async () => {
  // 從資料庫中獲取所有用戶資料
  const users = await prisma.user.findMany();
  return json({ users });
};

export const action: ActionFunction = async ({ request, params }) => {
  if (request.method === "POST") {
    const formData = await request.formData();
    const method = formData.get("_method");
    if (method === "delete") {
      const userId = formData.get("userId");
      if (userId) {
        await prisma.user.delete({ where: { id: parseInt(userId.toString()) } });
        return redirect("/users/list");
      }
    }
  }
  return json({ error: "Invalid request" }, { status: 400 });
};

export default function UsersRoute() {
  // 獲取從loader中載入的用戶資料
  const data = useLoaderData<typeof loader>();
  // 檢查資料結構，確保users屬性存在
  const usersArray = data && data.users && Array.isArray(data.users) ? data.users : [];

  return (
    // 用戶清單頁面的主要容器
    <div className="p-4">
      {/* 頁面標題 */}
      <h1 className="text-2xl font-bold mb-4">用戶清單</h1>
      {/* 渲染UserList組件，並傳遞用戶資料 */}
      <UserList users={usersArray} />
    </div>
  );
}
