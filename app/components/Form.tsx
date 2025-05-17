import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateForm = () => {
    let tempErrors: { name?: string; email?: string } = {};
    if (!name) tempErrors.name = "姓名是必填欄位";
    if (!email) tempErrors.email = "電子郵件是必填欄位";
    else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = "電子郵件格式不正確";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("表單提交成功");
      setName("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-white">聯絡表單</h2>
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
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        提交
      </button>
    </form>
  );
}
