import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment';

const FormContext = React.createContext();

export function useForm() {
  return useContext(FormContext);
}

const colorsArray = [
  'black',
  'turquoise',
  'blue',
  'yellow',
  'orange',
  'pink',
  'red',
  'brown',
];

export default function FormProvider({ children, ...props }) {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment(new Date()).format('HH:mm'));
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [city, setCity] = useState('');
  const [color, setColor] = useState('black');
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    setRerender(!rerender);
  }, [color]);

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
        colorsArray,
        rerender,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
