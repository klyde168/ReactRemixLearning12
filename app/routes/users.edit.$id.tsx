import { LoaderFunction, ActionFunction, json, redirect } from "@remix-run/node";
import { useLoaderData, Form, useNavigation } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const loader: LoaderFunction = async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });
  if (!user) {
    throw new Response("User not found", { status: 404 });
  }
  return json({ user });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");

  if (typeof name !== "string" || typeof email !== "string") {
    return json({ error: "Invalid form data" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: Number(params.id) },
    data: { name, email },
  });

  return redirect("/users/list");
};

export default function EditUserRoute() {
  const { user } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">編輯用戶</h1>
      <Form method="post" className="bg-gray-800 shadow-md rounded p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-blue-300 mb-2">名稱</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={user.name}
            className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-blue-300 mb-2">電子郵件</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
            className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "更新中..." : "更新用戶"}
        </button>
      </Form>
    </div>
  );
}
