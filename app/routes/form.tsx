import type { MetaFunction } from "@remix-run/node";
import Form from "~/components/Form";

export const meta: MetaFunction = () => {
  return [
    { title: "表單頁面" },
    { name: "description", content: "表單輸入與驗證" },
  ];
};

export default function FormPage() {
  return (
    <div className="flex-1 p-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">表單輸入與驗證</h1>
      <Form />
    </div>
  );
}
