import { useLoaderData } from "@remix-run/react";
import type { LoaderData, User } from "~/routes/api";

/**
 * 使用者清單組件
 * 這個組件負責顯示從 API 獲取的使用者清單。
 * 如果有錯誤訊息，會顯示錯誤訊息。
 */
export default function UserList() {
  const { users, error } = useLoaderData<LoaderData>();

  if (error) {
    return <div className="text-red-500 p-4">錯誤：{error}</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">使用者清單</h2>
      <ul className="space-y-4">
        {users.map((user: User) => (
          <li key={user.id} className="border-b pb-2">
            <p className="text-lg font-semibold text-gray-700">{user.name}</p>
            <p className="text-sm text-gray-500">電子郵件：{user.email}</p>
            <p className="text-sm text-gray-500">電話：{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
