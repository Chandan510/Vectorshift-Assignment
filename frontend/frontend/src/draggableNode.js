// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '80px', 
          height: '60px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          backgroundColor: '#6366F1',
          justifyContent: 'center', 
          flexDirection: 'column',
          gap: '2px',
          border:'2px solid #C1B1EBFF'
        }} 
        draggable
      >
          <img src={icon} className="w-[20px]"/>
          <span style={{ color: '#fff', fontSize:'15px' }}>{label}</span>
      </div>
    );
  };
  