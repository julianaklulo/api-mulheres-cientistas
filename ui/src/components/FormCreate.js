import React, { useState } from 'react';
import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react';
import { postDataToApi } from '../api';

function FormCreate({ onClose, fetchData }) {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    nascimento: '',
    morte: '',
    imagem: '',
    wikipedia: '',
    frase: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postDataToApi(formData);
    fetchData();
    onClose();
  };

  return (
    <CForm onSubmit={handleSubmit}>
        <div>
            <CFormLabel htmlFor="nome">Nome:</CFormLabel>
            <CFormInput
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <CFormLabel htmlFor="descricao">Descrição:</CFormLabel>
            <CFormInput
                type="text"
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <CFormLabel htmlFor="nascimento">Nascimento:</CFormLabel>
            <CFormInput
                type="text"
                id="nascimento"
                name="nascimento"
                value={formData.nascimento}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <CFormLabel htmlFor="morte">Morte:</CFormLabel>
            <CFormInput
                type="text"
                id="morte"
                name="morte"
                value={formData.morte}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <CFormLabel htmlFor="frase">Frase:</CFormLabel>
            <CFormInput

                type="text"
                id="frase"
                name="frase"
                value={formData.frase}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <CFormLabel htmlFor="imagem">Imagem:</CFormLabel>
            <CFormInput

                type="text"
                id="imagem"
                name="imagem"
                value={formData.imagem}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <CFormLabel htmlFor="wikipedia">Wikipedia:</CFormLabel>
            <CFormInput

                type="text"
                id="wikipedia"
                name="wikipedia"
                value={formData.wikipedia}
                onChange={handleInputChange}
            />
        </div>
        <CButton type="submit">Salvar</CButton>
    </CForm>
    );
}

export default FormCreate;
