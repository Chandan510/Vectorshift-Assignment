// llmNode.js

import {  Position } from 'reactflow';
import { BaseNode } from './BaseNode'

export const LLMNode = ({ id, data }) => {

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-system` },
    { type: 'source', position: Position.Right, id: `${id}-response` },

  ]

  return (
    <BaseNode header={"LLM"} handles={handles}>

      {/* Select model */}
      <label className="flex flex-col gap-1.5">
        <span className="node-label">AI Model</span>
        <select className=' bg-[#0F172A] border border-[#334155] text-white text-xs rounded-lg px-3 py-2 outline-none focus:border-[#A78BFA] cursor-pointer appearance-none' >
          <option>OpenAI v4</option>
          <option>Claude 4.5</option>
        </select>
      </label>

      {/* Context */}
      <label className="flex flex-col gap-1.5">
        <span className="node-label">Context</span>
        <textarea
          type="text"
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          className="max-h-[400px] resize-none bg-[#0F172A] overflow-hidden border border-[#334155] text-white text-xs rounded-lg px-3 py-2 outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] transition-all"
        ></textarea>
      </label>

    </BaseNode>
  );
}
