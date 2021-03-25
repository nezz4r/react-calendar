import React from 'react';
import ReactDOM from 'react-dom';
import CalendarProvider from 'contexts/CalendarContext';
import App from './App';

ReactDOM.render(
  <CalendarProvider>
    <App />
  </CalendarProvider>,
  document.getElementById('root')
);
