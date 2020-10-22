import React from 'react';

import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 1rem;
  
  text-align:left;
  border-bottom: 1px solid black;
  width:100%;
`;

const InnerContainer = styled.div`
  width:100%;
  max-width:1120px;
`;


function Header() {
  return <HeaderContainer>
            <InnerContainer>
              <h1>Events</h1>
            </InnerContainer>
         </HeaderContainer>

}

export default Header;