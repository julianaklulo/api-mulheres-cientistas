import FormCreate from './FormCreate';
import Modal from 'react-modal';

function FormCreateModal({ isOpen, closeModal, fetchData }) {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Form Modal"
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
            onClick={closeModal}
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
        <FormCreate onClose={closeModal} fetchData={fetchData} />
    </Modal>
    );
}

export default FormCreateModal;
