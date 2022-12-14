import styled from 'styled-components';

export const ListItem = styled.li`
  width: calc((100% - 40px) / 3);
  border-radius: 16px;
  border: 2px solid hsla(0, 0%, 50%, 0.4);
  overflow: hidden;
  transform: scale(1);
  transition-duration: 700ms;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Pic = styled.img`
  width: 100%;
  height: auto;
  height: 280px;
  object-fit: cover;
`;
