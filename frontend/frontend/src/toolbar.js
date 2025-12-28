import { DraggableNode } from "./draggableNode";
import { useStore } from './store';
import {  useState } from 'react';
import axios from 'axios';
import { SubmitButton } from "./submit";
import PipelineAlert from './PipelineAlert'

import bot from './assets/icons/bot.png'
import calendar from './assets/icons/calendar.png'
import database from './assets/icons/database.png'
import font from './assets/icons/font.png'
import docs from './assets/icons/google-docs.png'
import inputnew from './assets/icons/inputnew.png'
import mail from './assets/icons/mail.png'
import output from './assets/icons/output.png'
import webhook from './assets/icons/webhook.png'


export const PipelineToolbar = () => {


  const [alertData, setAlertData] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { nodes, edges } = useStore(state => ({
      nodes: state.nodes,
      edges: state.edges,
  }));

  const handleSubmit = async () => {
      setIsSubmitting(true)
      try {
          console.log({ nodes, edges })
          const response = await axios.post('http://localhost:8000/pipelines/parse', { nodes, edges })
          console.log("API response", response)
          setAlertData({
              nodesCount: response.data.nodes.length,
              edgesCount: response.data.edges.length,
              isDAG: response.data.isDAG,
          });

      } catch (error) {
          console.log(error)
      } finally {
          setIsSubmitting(false)

      }
  }


  return (
    <div className="p-4">



      {/* Left Section */}
      <div
        className="px-6 py-4 flex items-center gap-12 rounded-xl bg-[#2E106B] justify-between mb-4"
      >
        <div className="  flex items-center gap-12 rounded-xl bg-[#2E106B]  ">


          {/* Logo Section */}
          <div className="flex-shrink-0 border-r border-gray-500 pr-8">
            <img
              src="/vectorshift-logo.png"
              className="w-[120px] brightness-110"
              alt="Logo"
            />
          </div>

          {/* Nodes Section */}
          <div className="flex flex-wrap gap-6">
            <DraggableNode icon={inputnew} type="customInput" label="Input" />
            <DraggableNode icon={bot} type="llm" label="LLM" />
            <DraggableNode icon={output} type="customOutput" label="Output" />
            <DraggableNode icon={font} type="text" label="Text" />
            <DraggableNode icon={docs} type="docParser" label="Document" />
            <DraggableNode icon={mail} type="emailNode" label="Email" />
            <DraggableNode icon={calendar} type="calendarNode" label="Calendar" />
            <DraggableNode icon={webhook} type="webhookNode" label="Webhook" />
            <DraggableNode icon={database} type="databaseNode" label="Database" />

          </div>
        </div>

        {/* Right Section */}
        {/* <button className="text-white capitalize">
          Submit Pipeline
        </button> */}
        <div className="flex-shrink-0 border-l border-gray-500 pl-8">
          <SubmitButton onClick={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>

      {alertData && (
                <PipelineAlert
                    
                    nodesCount={alertData.nodesCount}
                    edgesCount={alertData.edgesCount}
                    isDAG={alertData.isDAG}
                    onClose={() => setAlertData(null)}
                />
            )}

    </div>
  );
};
