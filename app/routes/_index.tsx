import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex">
      {/* 導航欄 */}
      <div className="w-64 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <ul>
          <li><a href="#" className="block py-2">Home</a></li>
          <li><a href="#" className="block py-2">About</a></li>
          <li><a href="#" className="block py-2">Services</a></li>
          <li><a href="#" className="block py-2">Contact</a></li>
        </ul>
      </div>

      {/* 內容顯示區域 */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Content Area</h1>
        <p>This is the main content area of the page.</p>
      </div>
    </div>
  );
}
