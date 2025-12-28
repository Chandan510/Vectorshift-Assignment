import React,{useState} from 'react'
import { BaseNode } from './BaseNode'
import { Position } from 'reactflow';
import { TextInput } from '../components/inputs/TextInput';

export const CalendarNode = ({ id, data }) => {
  const [value,setValue] = useState('')

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-calendarData` },

  ]

  return (
    <BaseNode header="Calendar" handles={handles}>
     
      <TextInput title={'Data'} onChange={(e)=>setValue(e.target.value)} />

    </BaseNode>
  )
}

