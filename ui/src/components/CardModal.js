import React, { useState } from 'react';
import Modal from 'react-modal';
import Card from './Card';
import { CButton } from '@coreui/react';
import FormEditModal from './FormEditModal';


Modal.setAppElement('#root');

function CardModal({ isOpen, closeModal, selectedCard, handleDelete, fetchData }) {
  const [formEditModalIsOpen, setFormEditModalIsOpen] = useState(false);

  const openFormEditModal = () => {
    setFormEditModalIsOpen(true);
  };

  const closeFormEditModal = async () => {
    await fetchData();
    setFormEditModalIsOpen(false);
    closeModal();
  };


  const handleCloseModal = () => {
      closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Card Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40rem',
          height: '60vh',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          border: 'none',
          overflow: 'auto',
          outline: 'none',
        }
      }}
    >
      <button
        className="close-button"
        onClick={handleCloseModal}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {selectedCard && <Card item={selectedCard} />}
      <CButton onClick={() => openFormEditModal()} style={{ marginRight: '10px' }}>Editar</CButton>
      <CButton color="danger" onClick={() => handleDelete(selectedCard.id)} style={{ marginLeft: '10px' }}>Deletar</CButton>
      <FormEditModal isOpen={formEditModalIsOpen} closeModal={closeFormEditModal} fetchData={fetchData} initialData={selectedCard}/>
    </Modal>
  );
}

export default CardModal;
