import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className='bg-[#000] flex flex-col h-screen'>
      <PipelineToolbar />
      <PipelineUI className="flex-1"/>
      {/* <SubmitButton /> */}
    </div>
  );
}

export default App;
