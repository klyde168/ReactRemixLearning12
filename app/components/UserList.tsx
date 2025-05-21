import React from "react";
import { User } from "@prisma/client";
import { Link } from "@remix-run/react";

/**
 * 用戶清單組件
 * 這個組件負責顯示從資料庫讀取的用戶清單。
 * 表單使用Tailwind CSS進行美化，呈現科技風格。
 */

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    // 用戶清單容器，使用深灰色背景、陰影和圓角設計，營造科技風
    <div className="bg-gray-800 shadow-md rounded p-6">
      {!users || users.length === 0 ? (
        // 如果沒有用戶資料，顯示提示訊息
        <p className="text-white text-center">目前沒有用戶資料</p>
      ) : (
        // 如果有用戶資料，顯示用戶清單
        <table className="min-w-full divide-y divide-gray-600">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">名稱</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">電子郵件</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-600">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Link
                    to={`/users/edit/${user.id}`}
                    className="text-blue-400 hover:text-blue-300 mr-2"
                  >
                    編輯
                  </Link>
                  <form
                    method="post"
                    action="/users/list"
                    className="inline"
                    onSubmit={(e) => {
                      if (!confirm('確定要刪除此用戶嗎？')) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <input type="hidden" name="_method" value="delete" />
                    <input type="hidden" name="userId" value={user.id} />
                    <button
                      type="submit"
                      className="text-red-400 hover:text-red-300"
                    >
                      刪除
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
