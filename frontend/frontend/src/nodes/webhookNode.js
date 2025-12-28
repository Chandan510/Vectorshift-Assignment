import React from 'react'
import { BaseNode } from './BaseNode'
import { Position } from 'reactflow';
import {TextInput} from '../components/inputs/TextInput'

export const WebHookNode = ({ id, data }) => {

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-webhookinput` },
    { type: 'target', position: Position.Left, id: `${id}-webhookoutput` },
    
  ]

  return (
    <BaseNode header="Webhook" handles={handles}>
 
      <TextInput title={'Link'} />

      
    </BaseNode>
  )
}

