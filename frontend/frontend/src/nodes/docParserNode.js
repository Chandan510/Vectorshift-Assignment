import React from 'react'
import { BaseNode } from './BaseNode'
import { Position } from 'reactflow';
import {FileInput} from '../components/inputs/FileInput'

export const DocParserNode = ({ id, data }) => {

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-docParser` },

  ]

  return (
    <BaseNode header="Doc Parser" handles={handles}>
      {/* Type Selector */}
      <label className="flex flex-col gap-1.5">
        <span className="node-label">Data Type</span>
        <select

          className="mb-1 bg-[#0F172A] border border-[#334155] text-white text-xs rounded-lg px-3 py-2 outline-none focus:border-[#A78BFA] cursor-pointer appearance-none"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>

      {/* File input */}
      <FileInput title={'File'} />
    </BaseNode>
  )
}

