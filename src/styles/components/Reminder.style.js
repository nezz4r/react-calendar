import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: var(--rm-${({ color }) => color ?? 'black'});
  padding: 1px 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--light);
  font-size: 14px;
  margin-bottom: 3px;
`;
