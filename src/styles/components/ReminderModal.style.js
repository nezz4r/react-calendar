import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  height: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--light);
  padding: 1px 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: 500px;
  border: none;
  background: none;
  font-size: 20px;

  &:focus {
    outline: none;
    border: none;
  }
`;
