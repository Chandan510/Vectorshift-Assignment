// textNode.js

import { useEffect, useState, useMemo } from "react";
import { Position, useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./BaseNode";
 
export const TextNode = ({ id, data }) => {
  const MAX_VARIABLES = 6;
  
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [showLimitPopup, setShowLimitPopup] = useState(false);
  const updateNodeInternals = useUpdateNodeInternals();

  const handleTextChange = (e) => {
    const new_text = e.target.value;
    
     const variable_identifier_regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...new_text.matchAll(variable_identifier_regex)];
    const uniqueVars = [...new Set(matches.map((m) => m[1]))];
    
     if (uniqueVars.length > MAX_VARIABLES) {
       setShowLimitPopup(true);
      setTimeout(() => setShowLimitPopup(false), 2000);
      return;  
    }
    
    setCurrText(new_text);
  };

   const variables = useMemo(() => {
    const variable_identifier_regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(variable_identifier_regex)];
    return [...new Set(matches.map((m) => m[1]))];
  }, [currText]);

   const handles = [
    { type: "source", position: Position.Right, id: `${id}-output` },
    ...variables.map((name, index) => ({
      type: "target",
      position: Position.Left,
      id: `${id}-${name}`,
      top: 80 + (index * 25),  
    })),
  ];

   useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id]);

  console.log(handles);

  return (
    <div className="relative">
       {showLimitPopup && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-lg animate-bounce z-50 whitespace-nowrap">
          Only {MAX_VARIABLES} variables allowed!
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-red-500"></div>
        </div>
      )}

      <BaseNode header={"Text"} handles={handles}>
        <div className="flex flex-col gap-2">
          {/* Variable Counter */}
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-[#94A3B8] font-semibold uppercase">
              Text
            </span>
            <span className={`font-medium ${variables.length >= MAX_VARIABLES ? 'text-red-400' : 'text-[#60A5FA]'}`}>
              Variables: {variables.length}/{MAX_VARIABLES}
            </span>
          </div>

           
          <textarea
            type="text"
            value={currText}
            onChange={handleTextChange}
            placeholder="Type text with variables like {{name}}, {{email}}..."
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
            className="resize-none max-h-[400px] bg-[#0F172A] overflow-hidden border border-[#334155] text-white text-xs rounded-lg px-3 py-2 outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] transition-all"
          />

           {variables.length > 0 && (
            <div className="mt-1 p-2 bg-[#0F172A] border border-[#334155] rounded-lg">
              <p className="text-[9px] text-[#94A3B8] uppercase font-semibold mb-1">
                Detected Variables:
              </p>
              <div className="flex flex-wrap gap-1">
                {variables.map((varName) => (
                  <span
                    key={varName}
                    className="px-2 py-0.5 bg-[#4338CA] text-white text-[10px] rounded font-mono"
                  >
                    {`{{${varName}}}`}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </BaseNode>
    </div>
  );
};