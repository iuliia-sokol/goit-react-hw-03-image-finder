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
  position: relative;
  height: 500px;
  width: 60vw;
`;

export const ModalPic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

export const ModalDescr = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 12px 24px;
  color: white;
  font-size: 16px;
  background-color: rgba(200, 200, 92, 0.3);
  border-radius: 0px 0px 24px 24px;
  margin: 0;
`;
