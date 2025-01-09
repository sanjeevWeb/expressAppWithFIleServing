import { ReactFlow } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import ModalComponent from './components/modal/ModalComponent';
import { useState } from 'react';
import NodeComponent from './components/nodes/NodeComponent';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [activeModal, setActiveModal] = useState(null); 
  const handleOpenModal = (modalType) => {
    setActiveModal(modalType); 
    setOpenModal(true);       
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveModal(null); // Reset the active modal type
  };

  return (
    <div>
      <button
        onClick={() => handleOpenModal('list')}
        className="modalButton">
        List
      </button>
      <button
        onClick={() => handleOpenModal('email')}
        className="modalButton">
        Email
      </button>
      <button
        onClick={() => handleOpenModal('wait')}
        className="modalButton">
        Wait
      </button>

      {activeModal === 'list' && (
        <ModalComponent
          open={openModal}
          title="Leads from List(s)"
          description="Connect multiple leads as source for this sequence"
          dropdownTitle="Select your List(s)"
          btnTitle="New List +"
          onClose={handleCloseModal}
        />
      )}

      {activeModal === 'email' && (
        <ModalComponent
          open={openModal}
          title="Cold Email"
          description="Send an email to a lead"
          dropdownTitle="Email Template"
          btnTitle="New Template"
          onClose={handleCloseModal}
        />
      )}

      {activeModal === 'wait' && (
        <ModalComponent
          open={openModal}
          title="Wait"
          description="Add a delay between blocks"
          dropdownTitle="Wait for"
          btnTitle="Insert"
          onClose={handleCloseModal}
        />
      )}
    </div>

    
  );
}