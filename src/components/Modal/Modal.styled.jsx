import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalWindow = styled.div`
  width: 70vw;
`;

export const ModalPic = styled.img`
  width: 100%;
  height: 500px;
`;
