import styled from 'styled-components';

export const StartTxtWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StartTxt = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px 16px;
  border: none;
  font-size: 24px;

  & > svg {
    margin-left: 16px;
  }
`;
