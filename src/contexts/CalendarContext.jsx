import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment';
import { buildCalendar } from 'helpers';

const CalendarContext = React.createContext();

export function useCalendar() {
  return useContext(CalendarContext);
}

export default function CalendarProvider({ children, ...props }) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <CalendarContext.Provider
      value={{
        value,
        setValue,
        calendar,
        setCalendar,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
