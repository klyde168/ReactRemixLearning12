import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData, useSearchParams } from "@remix-run/react";
import NavBar from "~/components/NavBar";
import ContentArea from "~/components/ContentArea";
import { useState, useEffect } from "react";
import Counter from "~/components/Counter";
import Form from "~/components/Form";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to our homepage!" },
  ];
};

export default function Index() {
  const [content, setContent] = useState<React.ReactNode[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const route = searchParams.get('route');
    if (route) {
      let newContent;
      switch (route) {
        case '/':
          newContent = (
            <>
              <p>Welcome to the homepage!</p>
              <Counter />
            </>
          );
          break;
        case 'about':
          newContent = <p>This is the about page.</p>;
          break;
        case 'services':
          newContent = <p>This is the services page.</p>;
          break;
        case 'contact':
          newContent = <p>This is the contact page.</p>;
          break;
        case 'form':
          newContent = <Form />;
          break;
        default:
          newContent = <p>Unknown route.</p>;
      }
      setContent(prev => [newContent]);
    }
  }, [searchParams]);

  return (
    <div className="h-screen flex bg-gray-900 text-white">
      {/* 導航欄 */}
   
      {/* 內容顯示區域 */}
      <div className="flex-1 p-4 bg-gray-800">
          {content.map((c, i) => (
            <ContentArea key={i}>{c}</ContentArea>
          ))}
        <Outlet />
      </div>
    </div>
  );
}
