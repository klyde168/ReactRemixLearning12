import { useLoaderData } from "@remix-run/react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const users = useLoaderData<User[] | null>();

  return (
    /* 使用者清單元件，使用深灰色背景和白色文字，顯示從 API 獲取的使用者資料 */
    <div className="bg-gray-700 p-6 rounded-lg shadow-md w-full">
      {/* 清單標題 */}
      <h2 className="text-2xl font-bold mb-4 text-white">使用者清單</h2>
      {users && users.length > 0 ? (
        /* 如果有使用者資料，顯示使用者清單 */
        <ul className="space-y-2">
          {users.map((user) => (
            /* 每個使用者的資料項目 */
            <li key={user.id} className="p-2 bg-gray-800 rounded text-white">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-300">{user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        /* 如果沒有使用者資料，顯示提示訊息 */
        <p className="text-white">沒有找到使用者資料。</p>
      )}
    </div>
  );
}
