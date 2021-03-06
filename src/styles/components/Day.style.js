import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: calc(100% / 7);
  height: 100px;

  &:hover > button {
    opacity: 1;
  }
`;

// prettier-ignore
export const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 15px 10px 15px;
  background-color: ${({ selected, weekend, before }) =>
    weekend
      ? 'var(--light2)'
      : before
        ? 'var(--light2)'
        : selected
          ? 'var(--light)'
          : 'var(--light)'};

  outline: 1px solid white;
  transition: background-color 0.1s ease, filter 0.1s ease;
  filter: brightness(
    ${({ before, selected }) => (before ? '0.9' : selected ? '0.95' : '1')}
  );
  overflow-y: scroll;

  &:hover {
    filter: brightness(0.95);
    & > button {
      opacity: 1;
    }
  }
  &::-webkit-scrollbar{
    display: block;
    overflow: auto;
    width: 6px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
}
`;

export const Title = styled.h1`
  position: absolute;
  left: 15px;
  top: 10px;
  font-family: var(--font-title);
  font-weight: 500;
  pointer-events: none;
  user-select: none;
  color: ${({ today }) => (today ? 'var(--rm-red)' : 'var(--dark)')};
  font-size: 20px;
`;

export const AddButton = styled.button`
  position: absolute;
  padding: 1px 1px;
  top: 5px;
  right: 10px;
  border-radius: 5px;
  border: none;
  opacity: 0;
  background: none;
  transition: opacity 0.2s ease;
  z-index: 2;

  &:focus {
    outline: none;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  padding: 1px 1px;
  top: 20px;
  right: 10px;
  border-radius: 5px;
  border: none;
  opacity: 0;
  background: none;
  transition: opacity 0.2s ease;
  z-index: 2;

  &:focus {
    outline: none;
  }
`;

export const WeatherWrapper = styled.span`
  position: absolute;
  padding: 1px 1px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;
