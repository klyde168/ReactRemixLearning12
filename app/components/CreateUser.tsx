import { useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function CreateUser({ onCreate }: { onCreate: (user: { name: string; email: string }) => Promise<void> }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const navigate = useNavigate();

  /* 表單驗證函數，檢查姓名和電子郵件欄位是否符合要求 */
  const validateForm = () => {
    let tempErrors: { name?: string; email?: string } = {};
    if (!name) tempErrors.name = "姓名是必填欄位";
    if (!email) tempErrors.email = "電子郵件是必填欄位";
    else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = "電子郵件格式不正確";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  /* 表單提交處理函數，驗證通過後呼叫 onCreate 函數並導航到資料庫頁面 */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      await onCreate({ name, email });
      navigate('/users/list');
    }
  };

  return (
    /* 用戶創建表單，使用深灰色背景和白色文字，設置最大寬度 */
    <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md">
      {/* 表單標題 */}
      <h2 className="text-2xl font-bold mb-4 text-white">創建用戶</h2>
      {/* 姓名輸入欄位 */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-white mb-1">姓名</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      {/* 電子郵件輸入欄位 */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-1">電子郵件</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      {/* 提交按鈕 */}
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        創建
      </button>
    </form>
  );
}