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
    currentReminderIndex,
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
    e.preventDefault();
    const newReminder = new ReminderClass(title, desc, date, time, city, color);
    const newReminderArr = reminders.slice();
    if (currentReminderIndex) {
      newReminderArr.splice(currentReminderIndex, 1);
    }
    newReminderArr.push(newReminder);
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
    <Form onSubmit={handleSubmit}>
      <FieldWrapper>
        <FieldTitle htmlFor="title">Title</FieldTitle>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          id="title"
          maxLength="15"
          required
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
        <FieldTitle>Color</FieldTitle>
        <ColorWrapper>
          {colorsArray.map((colorProp) => (
            <>
              <RadioInput
                checked={colorProp === color}
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
            </>
          ))}
        </ColorWrapper>
      </FieldWrapper>
      <ButtonWrapper>
        <DeleteButton
          style={{ display: currentReminderIndex ? 'block' : 'none' }}
          type="button"
        >
          Delete
        </DeleteButton>
        <SaveButton type="submit">Save</SaveButton>
      </ButtonWrapper>
    </Form>
  );
}
