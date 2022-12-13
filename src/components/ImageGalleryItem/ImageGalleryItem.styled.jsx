import styled from 'styled-components';

export const ListItem = styled.li`
  width: 285px;
  border-radius: 8px;
  border: 2px solid hsla(0, 0%, 50%, 0.4);
  overflow: hidden;
  @include transition(transform);
  z-index: -1;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Pic = styled.img`
  width: 100%;
  height: 220px;
`;
