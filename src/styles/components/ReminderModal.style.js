import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  height: 400px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: var(--light2);
  padding: 1px 10px;
  overflow: hidden;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`;
