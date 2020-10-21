import React from 'react';
import styled from '@emotion/styled';
import {CircularProgress} from '@material-ui/core/CircularProgress';


const LoadingContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  height:100vh;
  width:100%;
`;

function Loading() {
  return <LoadingContainer>
          <CircularProgress />
         </LoadingContainer>
}

export default Loading;