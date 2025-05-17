import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Contact" }];
};

export default function Contact() {
  return (
    <div className="flex-1 p-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">聯絡</h1>
      <p>這是聯絡頁面。</p>
    </div>
  );
}
