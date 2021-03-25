import { useState, useEffect } from 'react';
import moment from 'moment';
import {
  RadioInput,
  RadioLabel,
  RadioSpan,
  FieldTitle,
  FieldWrapper,
} from 'styles/components/ReminderForm.style';

import { useReminders } from 'contexts/RemindersContext';
import { useForm } from 'contexts/FormContext';
import { ReminderClass } from 'helpers';

const colors = [
  'black',
  'turquoise',
  'blue',
  'yellow',
  'orange',
  'pink',
  'red',
  'brown',
];

export default function ReminderForm() {
  const {
    reminders,
    setReminders,
    modalDay,
    setModalOpen,
    currentReminder,
  } = useReminders();
  const {
    date,
    setDate,
    time,
    setTime,
    desc,
    setDesc,
    title,
    setTitle,
    color,
    setColor,
    city,
    setCity,
  } = useForm();

  useEffect(() => {
    setDate(modalDay.format('YYYY-MM-DD'));
  }, [modalDay]);

  function handleSubmit(e) {
    e.preventDefault();
    const newReminder = new ReminderClass(desc, date, time, city, color);
    const newReminderArr = reminders.slice();
    if (currentReminder) {
      newReminderArr.pop(currentReminder);
    }

    newReminderArr.push(newReminder);
    setReminders(newReminderArr);
    setModalOpen(false);
    setTime(moment(new Date()).format('HH:mm'));
    setDesc('');
    setColor('black');
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldWrapper>
        <FieldTitle htmlFor="date">Date</FieldTitle>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="date"
          id="date"
          type="date"
          required
        />
      </FieldWrapper>

      <FieldWrapper>
        <FieldTitle htmlFor="time">Time</FieldTitle>
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          name="time"
          id="time"
          type="time"
          required
        />
      </FieldWrapper>

      <FieldWrapper>
        <FieldTitle htmlFor="city">City</FieldTitle>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          name="city"
          id="city"
          maxLength="30"
          required
        />
      </FieldWrapper>

      <FieldWrapper>
        <FieldTitle htmlFor="desc">Description</FieldTitle>
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          name="desc"
          id="desc"
          maxLength="30"
          required
        />
      </FieldWrapper>

      <FieldWrapper>
        <FieldTitle>Color</FieldTitle>
        {colors.map((colorProp) => (
          <span key={`${colorProp}-wrap`}>
            <RadioInput
              defaultChecked={colorProp === color}
              type="radio"
              name="color"
              id={colorProp}
              value={colorProp}
              onClick={() => setColor(colorProp)}
              key={colorProp}
            />
            <RadioLabel key={`${colorProp}-label`} htmlFor={colorProp}>
              <RadioSpan key={`${colorProp}-span`} color={colorProp} />
            </RadioLabel>
          </span>
        ))}
      </FieldWrapper>
      <button type="submit">Submit</button>
    </form>
  );
}
