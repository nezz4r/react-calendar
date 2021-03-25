import styled from 'styled-components';

export const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--dark);
  padding: 20px 20px;
  display: flex;
  font-size: 32px;
  color: var(--light);
  user-select: none;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: var(--light);
  min-width: 250px;
`;

export const WeekDay = styled.h2`
  font-size: 24px;
  color: var(--light);
  padding-left: 15px;
  font-family: var(--font-title);
  user-select: none;
`;

export const WeekDaysWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--grey);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-content: center;
`;
