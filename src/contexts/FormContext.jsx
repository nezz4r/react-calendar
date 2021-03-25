import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment';
import { useReminders } from 'contexts/RemindersContext';

const FormContext = React.createContext();

export function useForm() {
  return useContext(FormContext);
}

export default function FormProvider({ children, ...props }) {
  const { modalDay } = useReminders();
  const [date, setDate] = useState(modalDay.format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment(new Date()).format('HH:mm'));
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [city, setCity] = useState('');
  const [color, setColor] = useState('black');

  return (
    <FormContext.Provider
      value={{
        date,
        setDate,
        time,
        setTime,
        title,
        setTitle,
        desc,
        setDesc,
        city,
        setCity,
        color,
        setColor,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
