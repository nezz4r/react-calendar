import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: var(--rm-${({ color }) => color ?? 'black'});
  padding: 1px 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--light);
  margin-bottom: 3px;
`;
