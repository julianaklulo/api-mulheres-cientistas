import { CCard, CCardBody, CCardImage, CCardTitle, CCardText, CButton, CRow, CCol } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

function Card({ item }) {

  return (
    <div>
      <CCard key={item.id} className="card-hover" style={{ maxWidth: '540px', margin: '10px' }}>
        <CRow className="g-0">
          <CCol md={6}>
            <CCardImage src={item.imagem} alt={item.nome} width="350" height="400" />
          </CCol>
          <CCol md={6}>
           <CCardBody>
            <CCardTitle>{item.nome}</CCardTitle>
            <CCardText style={{ height: '50px', overflow: 'hidden' }}>{item.descricao}</CCardText>
            <CCardText style={{ height: '25px', overflow: 'hidden' }}>{item.nascimento} - {item.morte}</CCardText>
            <CCardText style={{ height: '100px', overflow: 'hidden' }}>"{item.frase}"</CCardText>
            <CButton color="info" href={item.wikipedia} target='_blank'>Wikipedia</CButton>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  </div>
  );
}

export default Card;
