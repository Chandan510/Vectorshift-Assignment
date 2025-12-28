import React from "react";
import { Handle } from "reactflow";

export const BaseNode = ({ header, handles, children }) => {
 
  const targetHandles = handles.filter((value, _) => {
    if (value.type === "target") return true;
  });

  const sourceHandles = handles.filter((value, _) => {
    if (value.type === "source") return true;
  });


  return (
    <div
      className="
      bg-[#1E1B4B]                 
      border border-[#4338CA]      
      rounded-xl shadow-2xl 
      min-w-[200px] 
      transition-all duration-300 
      hover:shadow-[0_0_20px_rgba(114,89,181,0.4)]
      hover:border-[#7259B5]
       
    "
    >
      {/* Header Section  */}
      <div className="bg-[#2E106B] px-4 py-2 rounded-t-xl border-b border-[#4338CA] flex justify-between items-center">
        <span className="text-[#A78BFA] text-[10px] font-bold uppercase tracking-widest">
          {header} Node
        </span>
        <div className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse"></div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-4">
        {/* Name Input */}

        {children}
      </div>

      {/* Target Handles */}
      {targetHandles &&
        targetHandles.map((value, index) => (
          <Handle
            key={value.id}
            type={value.type}
            position={value.position}
            id={value.id}
            style={{ top: 40 + index * 20 }}
          />
        ))}
      
      {/* Source Handles */}
      {sourceHandles &&
        sourceHandles.map((value, index) => (
          <Handle
            key={value.id}
            type={value.type}
            position={value.position}
            id={value.id}
            style={{ top: `${50}%` }}
          />
        ))}
    </div>
  );
};
