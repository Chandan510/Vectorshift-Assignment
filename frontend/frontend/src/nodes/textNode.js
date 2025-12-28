// textNode.js

import { useEffect, useState, useMemo } from "react";
import { Position,useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./BaseNode";
import {TextInput} from '../components/inputs/TextInput'

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const updateNodeInternals = useUpdateNodeInternals();

  const handleTextChange = (e) => {
    const new_text = e.target.value;
    setCurrText(new_text);
  };

  
  const variables = useMemo(() => {
    const variable_identifier_regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(variable_identifier_regex)];
    return [...new Set(matches.map((m) => m[1]))];
  }, [currText])


  const handles = [
    { type: "source", position: Position.Right, id: `${id}-output` },
    ...variables.map(name => ({
      type: "target",
      position: Position.Left,
      id: `${id}-${name}`,
    })),
  ];

  useEffect(()=>{
    updateNodeInternals(id)
  }, [variables, id])

  console.log(handles)

  return (
    <BaseNode header={"Text"} handles={handles}>
      <label className="flex flex-col gap-1.5">
        <span className="text-[#94A3B8] text-[10px] font-semibold uppercase">
          Text
        </span>
        <textarea
          type="text"
          value={currText}
          onChange={handleTextChange}

          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
          }}

          className="resize-none  max-h-[400px] bg-[#0F172A] overflow-hidden border border-[#334155] text-white text-xs rounded-lg px-3 py-2 outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] transition-all"
        ></textarea>
      </label>
    </BaseNode>
  );
};
