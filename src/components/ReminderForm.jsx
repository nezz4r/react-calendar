import { Fragment } from 'react';
import moment from 'moment';
import {
  RadioInput,
  RadioLabel,
  RadioSpan,
  FieldTitle,
  FieldWrapper,
  ButtonWrapper,
  SaveButton,
  DeleteButton,
  ColorWrapper,
  Form,
} from 'styles/components/ReminderForm.style';

import { useReminders } from 'contexts/RemindersContext';
import { useForm } from 'contexts/FormContext';
import { ReminderClass } from 'helpers';

export default function ReminderForm() {
  const {
    reminders,
    setReminders,
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
    colorsArray,
  } = useForm();

  function handleSubmit(e) {
    try {
      e.preventDefault();
      const newReminder = new ReminderClass(
        title,
        desc,
        date,
        time,
        city,
        color
      );

      const newReminderArr = reminders.filter((reminder) => {
        if (reminder !== currentReminder) {
          return true;
        }
        return false;
      });
      newReminderArr.push(newReminder);
      setReminders(newReminderArr);
      setModalOpen(false);
      setTime(moment(new Date()).format('HH:mm'));
      setDesc('');
      setColor('black');
      setTitle('');
      setDate('');
      setCity('');
      return 'sucess';
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  function handleDelete(e) {
    e.preventDefault();

    const newReminderArr = reminders.filter((reminder) => {
      if (reminder !== currentReminder) {
        return true;
      }
      return false;
    });

    setReminders(newReminderArr);
    setModalOpen(false);
    setTime(moment(new Date()).format('HH:mm'));
    setDesc('');
    setColor('black');
    setTitle('');
    setDate('');
    setCity('');
  }

  return (
    <Form data-testid="form" onSubmit={handleSubmit}>
      <FieldWrapper>
        <FieldTitle htmlFor="title">Title</FieldTitle>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          id="title"
          maxLength="15"
          required
          data-testid="title"
        />
      </FieldWrapper>

      <FieldWrapper>
        <FieldTitle htmlFor="desc">Description</FieldTitle>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          name="desc"
          id="desc"
          maxLength="30"
          required
          data-testid="desc"
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
          data-testid="city"
        />
      </FieldWrapper>

      <FieldWrapper>
        <FieldTitle htmlFor="date">Date</FieldTitle>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="date"
          id="date"
          type="date"
          required
          data-testid="date"
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
          data-testid="time"
        />
      </FieldWrapper>

      <FieldWrapper>
        <FieldTitle>Color</FieldTitle>
        <ColorWrapper>
          {colorsArray.map((colorProp) => (
            <Fragment key={`${colorProp}-wrapper`}>
              <RadioInput
                checked={colorProp === color}
                type="radio"
                name="color"
                id={colorProp}
                value={colorProp}
                onClick={() => setColor(colorProp)}
                data-testid={`color-${colorProp}`}
                onChange={() => {}}
              />
              <RadioLabel htmlFor={colorProp}>
                <RadioSpan color={colorProp} />
              </RadioLabel>
            </Fragment>
          ))}
        </ColorWrapper>
      </FieldWrapper>

      <ButtonWrapper>
        <DeleteButton
          style={{ display: currentReminder ? 'block' : 'none' }}
          onClick={handleDelete}
          type="button"
        >
          Delete
        </DeleteButton>
        <SaveButton data-testid="submit" type="submit">
          Save
        </SaveButton>
      </ButtonWrapper>
    </Form>
  );
}
