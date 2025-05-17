import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "About" }];
};

export default function About() {
  return (
    <div className="flex-1 p-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">關於</h1>
      <p>這是關於頁面。</p>
    </div>
  );
}
