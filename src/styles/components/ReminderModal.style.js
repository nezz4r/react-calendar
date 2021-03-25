import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50vw;
  height: 60vh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--light2);
  padding: 1px 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  animation: all 0.2s ease;
  visibility: ${({ isOpen }) => (isOpen ? 'shown' : 'hidden')};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: 500px;
  &::after {
    content: 'X';
  }
`;
