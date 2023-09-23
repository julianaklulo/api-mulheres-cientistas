import React, { useState } from 'react';
import { CHeader, CContainer, CHeaderBrand, CHeaderToggler, CCollapse, CNavItem, CNavLink, CHeaderNav } from '@coreui/react';

function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CHeader style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <CContainer fluid>
          <CHeaderBrand href="#">Mulheres Cientistas</CHeaderBrand>
          <CHeaderToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="header-collapse" visible={visible}>
            <CHeaderNav>
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
            </CHeaderNav>
          </CCollapse>
        </CContainer>
      </CHeader>
    </>
  );
}

export default Header;
