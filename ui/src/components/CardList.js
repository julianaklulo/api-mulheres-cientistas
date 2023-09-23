import React, { useState, useEffect } from 'react';
import CardModal from './CardModal';
import { CCard, CCardBody, CCardImage, CCardTitle, CButton } from '@coreui/react';
import './styles.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { fetchDataFromApi, deleteDataFromApi } from '../api';
import FormCreateModal from './FormCreateModal';

function CardList() {
  const [cardModalIsOpen, setCardModalIsOpen] = useState(false);
  const [formCreateModalIsOpen, setFormCreateModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const api_data = await fetchDataFromApi();
      setData(api_data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    await deleteDataFromApi(id);
    await fetchData();
    closeCardModal();
  };

  const openFormCreateModal = () => {
    setFormCreateModalIsOpen(true);
  };
  
  const closeFormCreateModal = async () => {
    await fetchData();
    setFormCreateModalIsOpen(false);
  };

  
  const openCardModal = (card) => {
    setSelectedCard(card);
    setCardModalIsOpen(true);
  };

  const closeCardModal = async () => {
    await fetchData();
    setSelectedCard(null);
    setCardModalIsOpen(false);
  };

  return (
    <>
      <div style={{ marginTop: '80px' }}>
        <CButton onClick={() => openFormCreateModal()} isOpen={formCreateModalIsOpen} closeModal={closeFormCreateModal}>Criar</CButton>
      </div>
      <div className="card-list-container" style={{ marginLeft: '50px', marginBottom: '50px' }}>
        <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {data.map((item) => (
            <CCard
              key={item.id}
              className="card-hover"
              style={{ width: '18rem', margin: '10px' }}
              onClick={() => openCardModal(item)}
            >
              <CCardImage orientation="top" src={item.imagem} alt={item.nome} width="350" height="400" />
              <CCardBody style={{ display: 'flex', flexDirection: 'column' }}>
                <CCardTitle>{item.nome}</CCardTitle>
                <CButton>Ver</CButton>
              </CCardBody>
            </CCard>
          ))}
          <FormCreateModal
            isOpen={formCreateModalIsOpen}
            closeModal={closeFormCreateModal}
            fetchData={fetchData}
          /> 
          <CardModal
            isOpen={cardModalIsOpen}
            closeModal={closeCardModal}
            selectedCard={selectedCard}
            handleDelete={handleDelete}
            fetchData={fetchData}
          />
        </div>
      </div>
    </>
  );
}

export default CardList;
