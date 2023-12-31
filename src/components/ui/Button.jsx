import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      className="bg-brand py-2 px-4 text-white rounded-sm hover:brightness-110 w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
