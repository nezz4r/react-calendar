import styled from 'styled-components';

export const FieldWrapper = styled.div``;

export const FieldTitle = styled.h2``;

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    span {
      box-shadow: 0px 0px 0px 2px var(--light), 0px 0px 0px 4px var(--dark);
    }
  }
`;

export const RadioLabel = styled.label`
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    span {
      transform: scale(1.05);
    }
  }
  span {
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-in-out;
  }
`;

export const RadioSpan = styled.span`
  border-radius: 10000px;
  background-color: var(--rm-${({ color }) => color});
`;
