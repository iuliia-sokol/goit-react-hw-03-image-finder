import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  margin-left: 16px;
  border: none;
  font-size: 16px;
  background-color: transparent;
  color: hsla(0, 0%, 100%, 1);
  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  & > svg {
    margin-right: 8px;
  }
`;
