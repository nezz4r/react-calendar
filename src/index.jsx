import React from 'react';
import ReactDOM from 'react-dom';
import CalendarProvider from 'contexts/CalendarContext';
import RemindersProvider from 'contexts/RemindersContext';
import App from './App';

ReactDOM.render(
  <CalendarProvider>
    <RemindersProvider>
      <App />
    </RemindersProvider>
  </CalendarProvider>,
  document.getElementById('root')
);
