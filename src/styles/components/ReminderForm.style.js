import styled from 'styled-components';

export const FieldWrapper = styled.div`
  margin: 3px 0;
  display: flex;
  flex-direction: column;
  & > input,
  & > textarea {
    border-radius: 3px;
    border: 1px solid grey;
  }
`;

export const FieldTitle = styled.h2`
  padding: 10px 0;
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 16px;
`;

export const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 0 10px;
  gap: 10px;
`;

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;

export const SaveButton = styled.button`
  flex: 1;
  height: 30px;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  color: white;
  transition: filter 0.2s ease;
  &:hover {
  }
`;

export const DeleteButton = styled.button`
  flex: 1;
  height: 30px;
  background-color: var(--light);
  border: 1px solid var(--rm-red);
  border-radius: 5px;
  color: var(--rm-red);
  transition: background-color 0.2s ease, color 0.2s ease;
  &:hover {
    background-color: var(--rm-red);
    color: var(--light);
  }
`;
