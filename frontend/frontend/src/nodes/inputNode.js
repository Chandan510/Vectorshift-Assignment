// inputNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { TextInput } from '../components/inputs/TextInput';
 

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handles = [
    {type:'source',position:Position.Right, id:`${id}-input`},
     
  ]

  return (
    <BaseNode header={"Input Field"} handles={handles}>
     <TextInput title={'Filed label'} />

        {/* Type Selector */}
        <label className="flex flex-col gap-1.5">
          <span className="text-[#94A3B8] text-[10px] font-semibold uppercase">Data Type</span>
          <select 
            value={inputType} 
            onChange={(e) => setInputType(e.target.value)}
            className="bg-[#0F172A] border border-[#334155] text-white text-xs rounded-lg px-3 py-2 outline-none focus:border-[#A78BFA] cursor-pointer appearance-none"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label></BaseNode>
  );
}