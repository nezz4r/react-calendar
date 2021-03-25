import styled from 'styled-components';

export const Box = styled.div`
  width: calc(100vw / 7);
  height: 100px;
  background-color: ${({ selected }) =>
    selected ? 'var(--light2)' : 'var(--light)'};
  border-left: 1px solid var(--dark);
  border-top: 1px solid var(--dark);
  position: relative;
  transition: background-color 0.1s ease, filter 0.1s ease;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const Title = styled.h1`
  position: absolute;
  left: 10px;
  top: 5px;
  font-family: var(--font-title);
  font-weight: 500;
  pointer-events: none;
  user-select: none;
  color: ${({ today }) => (today ? 'var(--rm-red)' : 'var(--dark)')};
  font-size: 20px;
`;
