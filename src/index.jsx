import React from 'react';
import ReactDOM from 'react-dom';
import CalendarProvider from 'contexts/CalendarContext';
import RemindersProvider from 'contexts/RemindersContext';
import FormProvider from 'contexts/FormContext';
import App from './App';

ReactDOM.render(
  <CalendarProvider>
    <RemindersProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </RemindersProvider>
  </CalendarProvider>,
  document.getElementById('root')
);
