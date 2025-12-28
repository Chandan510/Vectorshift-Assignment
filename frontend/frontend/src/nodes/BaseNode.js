import React  from 'react';
import { Handle } from 'reactflow';

export const BaseNode = ({ header, handles, children }) => {
  const targetHandles = handles.filter(h => h.type === "target");
  const sourceHandles = handles.filter(h => h.type === "source");

  return (
    <div className="max-w-[280px] bg-[#1E1B4B] border border-[#4338CA] rounded-xl shadow-2xl min-w-[200px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(114,89,181,0.4)] hover:border-[#7259B5]">
      <div className="bg-[#2E106B] px-4 py-2 rounded-t-xl border-b border-[#4338CA] flex justify-between items-center">
        <span className="text-[#A78BFA] text-[10px] font-bold uppercase tracking-widest">
          {header} Node
        </span>
        <div className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse"></div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {children}
      </div>

      {targetHandles.map((handle, index) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{ 
            top: handle.top !== undefined ? handle.top : 40 + index * 20,
            background: '#A78BFA'
          }}
        />
      ))}
      
      {sourceHandles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{ 
            top: handle.top !== undefined ? handle.top : '50%',
            background: '#A78BFA'
          }}
        />
      ))}
    </div>
  );
};
