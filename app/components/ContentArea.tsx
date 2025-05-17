import React from "react";

interface ContentAreaProps {
  children: React.ReactNode;
}

export default function ContentArea({ children }: ContentAreaProps) {
  return (
    <div className="p-4 border-t border-gray-700">
      {children}
    </div>
  );
}
