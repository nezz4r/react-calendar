import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import RemindersProvider from '../contexts/RemindersContext';
import FormProvider from '../contexts/FormContext';
import ReminderModal from '../components/ReminderModal';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

const Element = (
  <RemindersProvider>
    <FormProvider>
      <ReminderModal />
    </FormProvider>
  </RemindersProvider>
);
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(Element, div);
});

it('renders correctly', () => {
  const { getByTestId } = render(Element);

  expect(getByTestId('title')).toHaveAttribute('required');
  expect(getByTestId('title')).toHaveAttribute('maxlength');
  expect(getByTestId('desc')).toHaveAttribute('required');
  expect(getByTestId('desc')).toHaveAttribute('maxlength');
  expect(getByTestId('date')).toHaveAttribute('required');
  expect(getByTestId('city')).toHaveAttribute('required');
  expect(getByTestId('time')).toHaveAttribute('required');
  expect(getByTestId('date')).toHaveAttribute('required');
  expect(getByTestId('color-black')).toHaveAttribute('checked');
});

it('matches snapshot', () => {
  const tree = renderer.create(Element).toJSON();
  expect(tree).toMatchSnapshot();
});
