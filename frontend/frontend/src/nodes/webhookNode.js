import React from 'react'
import { BaseNode } from './BaseNode'
import { Position } from 'reactflow';
import {TextInput} from '../components/inputs/TextInput'

export const WebHookNode = ({ id, data }) => {

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-input` },
    { type: 'target', position: Position.Left, id: `${id}-response` },
    
  ]

  return (
    <BaseNode header="Webhook" handles={handles}>
      {/* Type Selector */}
      <TextInput title={'Link'} />

      
    </BaseNode>
  )
}

