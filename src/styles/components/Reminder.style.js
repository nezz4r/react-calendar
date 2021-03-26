import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: var(--rm-${({ color }) => color ?? 'black'});
  padding: 1px 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--light);
  font-size: 14px;
  letter-spacing: -1px;
  margin-bottom: 3px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Title = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: inherit;
  color: inherit;
`;

export const HoverDiv = styled.div`
  height: 30px;
  width: 1000px;
  position: absolute;
  background: black;
  top: 20px;
  left: -0px;
  z-index: 10;
  white-space: wrap;
  display: none;
`;
