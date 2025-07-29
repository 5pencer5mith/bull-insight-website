"use client";

import { Circle } from "lucide-react";

export default function Switch({
  enabled,
  setEnabled,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div
      onClick={() => {
        setEnabled(!enabled);
        setActiveCategory(!activeCategory);
      }}
      className={`w-12 h-6 rounded-2xl cursor-pointer p-1 transition-all duration-300
        ${enabled ? "bg-white" : "bg-blue-100"} 
        border border-blue-700 flex items-center`}
    >
      <div
        className={`transition-transform duration-300 transform 
          ${enabled ? "translate-x-6" : "translate-x-0"}`}
      >
        <Circle className="w-4 h-4 text-blue-700 fill-blue-200" />
      </div>
    </div>
  );
}
