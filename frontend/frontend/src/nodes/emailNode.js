import React, { useState } from 'react'
import { BaseNode } from './BaseNode'
import { Position } from 'reactflow';
import { TextInput } from '../components/inputs/TextInput';

export const EmailNode = ({ id, data }) => {

  const [value,setValue] = useState('')

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-email` },
    
  ]

  

  return (
    <BaseNode header="Email" handles={handles}>
      {/* Type Selector */}
      <TextInput title={'Data'} onChange={(e) => setValue(e.target.value)} />

      
    </BaseNode>
  )
}

