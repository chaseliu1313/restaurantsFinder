import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { color_se, color_pr, color_lg } from '../theme/index';
import { connect } from 'react-redux';

function Loading({ isLoading }) {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    let newState = isLoading;
    setloading(newState);
  }, [isLoading]);
  return (
    <Fragment loading={loading.toString()}>
      <Container>
        <Core />
      </Container>
      <div style={{ marginTop: '20vmin' }}>
        <h3 aria-level="3" aria-label="The content is loading">
          Loading...
        </h3>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  const isLoading = state.isLoading;

  return { isLoading };
};

export default connect(mapStateToProps, null)(Loading);

const ContainerKF = keyframes`
0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
    border: 4px solid ${color_se};
  }
  
  50% {
    transform: rotate(180deg);
    border: 4px solid ${color_lg};
  }
  
  75% {
    transform: rotate(360deg);
 
  }
  
  100% {
    transform: rotate(360deg);
  }`;

const CoreKF = keyframes`
  0% {
    height: 0%;
   
  }
  
  25% {
    height: 0%;
    background-color:${color_se};
  }
  
  50% {
    height: 100%;
    background-color:${color_lg};
  }
  
  75% {
    height: 100%;
    
  }
  
  100% {
    height: 0%;
  }
  `;

const Container = styled.div`
  display: block;
  width: 5vmin;
  height: 5vmin;
  position: fixed;
  border: 4px solid ${color_pr};
  border-radius: 3px;
  animation: ${ContainerKF} 3s infinite ease;
`;

const Core = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  background-color: ${color_pr};
  animation: ${CoreKF} 3s infinite ease-in;
`;

const Fragment = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
  width: 100%;
  height: 50vmin;
  display: ${({ loading }) => (loading === 'true' ? 'flex' : 'none')};
`;
