import { useLoaderData } from "@remix-run/react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const users = useLoaderData<User[] | null>();

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-white">使用者清單</h2>
      {users && users.length > 0 ? (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-2 bg-gray-800 rounded text-white">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-300">{user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">沒有找到使用者資料。</p>
      )}
    </div>
  );
}
