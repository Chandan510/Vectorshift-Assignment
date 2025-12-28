// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import {TextInput} from '../components/inputs/TextInput'

export const OutputNode = ({ id, data }) => {
   const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    {type:'target',position:Position.Left, id:`${id}-output-response`},
     
  ]

  return (
    <BaseNode header={"Output"} handles={handles}>
    
      
      
        <TextInput title={'Name'} />
     
        <label className="flex flex-col gap-1.5">
          <span className="text-[#94A3B8] text-[10px] font-semibold uppercase">Data Type</span>
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            className="bg-[#0F172A] border border-[#334155] text-white text-xs rounded-lg px-3 py-2 outline-none focus:border-[#A78BFA] cursor-pointer appearance-none"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      
    </BaseNode>
  );
}
