import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 15px;
  background-color: hsla(248, 39%, 39%, 1);
  z-index: 100;

  &:hover,
  &:focus {
    background-color: hsla(248, 39%, 39%, 0.9);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  min-width: 250px;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  background-color: transparent;
  color: #fff;
  box-shadow: 0 0 0.5em 0.2em rgba(110, 140, 200, 0.2);

  &::placeholder {
    color: hsla(0, 0%, 100%, 0.7);
  }
`;
