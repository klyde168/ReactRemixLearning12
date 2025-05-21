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

export const loader: LoaderFunction = async ({ request }) => {
  // 從URL中獲取搜尋參數
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  
  // 從資料庫中獲取用戶資料，根據搜尋詞過濾
  const users = await prisma.user.findMany({
    where: {
      OR: [
        { name: { contains: searchTerm } },
        { email: { contains: searchTerm } }
      ]
    }
  });
  return json({ users, searchTerm });
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
  // 獲取從loader中載入的用戶資料和搜尋詞
  const data = useLoaderData<typeof loader>();
  // 檢查資料結構，確保users屬性存在
  const usersArray = data && data.users && Array.isArray(data.users) ? data.users : [];
  const searchTerm = data.searchTerm || "";

  return (
    // 用戶清單頁面的主要容器
    <div className="p-4">
      {/* 頁面標題 */}
      <h1 className="text-2xl font-bold mb-4">用戶清單</h1>
      {/* 搜尋表單 */}
      <form className="mb-4" method="get" action="/users/list">
        <div className="flex gap-2">
          <input
            type="text"
            name="search"
            defaultValue={searchTerm}
            placeholder="搜尋用戶（姓名或電子郵件）"
            className="p-2 border rounded-md flex-grow"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            搜尋
          </button>
        </div>
      </form>
      {/* 渲染UserList組件，並傳遞用戶資料 */}
      <UserList users={usersArray} />
    </div>
  );
}
