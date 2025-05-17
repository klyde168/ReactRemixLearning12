import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Services" }];
};

export default function Services() {
  return (
    <div className="flex-1 p-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">服務</h1>
      <p>這是服務頁面。</p>
    </div>
  );
}
