import moment from 'moment';
import { useEffect, useState } from 'react';

import {
  Wrapper,
  Box,
  Title,
  AddButton,
  DeleteButton,
  WeatherWrapper,
} from 'styles/components/Day.style';
import Reminder from 'components/Reminder';
import { useCalendar } from 'contexts/CalendarContext';
import { useReminders } from 'contexts/RemindersContext';
import { useForm } from 'contexts/FormContext';

import {
  isSelected,
  isToday,
  isSameMonth,
  isWeekend,
  getWeatherData,
} from 'helpers';
import WeatherIcon from 'helpers/WeatherIcon';
import { PlusIcon, DeleteIcon } from './Icons';

export default function Day({ children, day, ...props }) {
  const {
    setModalOpen,
    reminders,
    setReminders,
    setCurrentReminder,
    setCurrentReminderIndex,
  } = useReminders();
  const { value } = useCalendar();
  const { setDate, setTime, setDesc, setTitle, setColor, setCity } = useForm();
  // prettier-ignore
  const filteredReminders = reminders.filter((reminder) => day.isSame(moment(reminder.date), 'day'));
  // prettier-ignore
  const sortedReminders = filteredReminders.sort(
    (a, b) =>
      moment(`${a.date} ${a.time}`).format('HHmm')
      - moment(`${b.date} ${b.time}`).format('HHmm')
  );
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (filteredReminders.length > 0) {
      getWeatherData(filteredReminders[0].city).then((res) => {
        setWeatherData(res?.data?.weather[0]?.main);
      });
    } else if (filteredReminders.length === 0) {
      setWeatherData(null);
    }
  }, [reminders]);

  function handleClick(e) {
    e.preventDefault();
    setModalOpen(true);
    setDate(day.format('YYYY-MM-DD'));
    setTime(moment().format('HH:mm'));
    setDesc('');
    setTitle('');
    setColor('black');
    setCity('');
    setCurrentReminder(null);
    setCurrentReminderIndex(null);
  }

  function handleDeleteAll(e) {
    e.preventDefault();

    const newReminderArr = reminders.filter((reminder) => {
      if (reminder.date !== day.format('YYYY-MM-DD')) {
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
    <Wrapper>
      <AddButton onClick={handleClick}>
        <PlusIcon />
      </AddButton>
      <DeleteButton
        style={{ display: sortedReminders.length ? 'block' : 'none' }}
        onClick={handleDeleteAll}
      >
        <DeleteIcon />
      </DeleteButton>
      <WeatherWrapper>
        <WeatherIcon
          style={{ display: weatherData ? 'block' : 'none' }}
          name={weatherData}
        />
      </WeatherWrapper>

      <Box
        selected={isSelected(day, value)}
        before={!isSameMonth(day, value)}
        weekend={isWeekend(day)}
        {...props}
      >
        <Title today={isToday(day)}>{children}</Title>
        {sortedReminders.map((reminder, index) => (
          <Reminder
            day={day}
            sortedReminders={sortedReminders}
            reminder={reminder}
            index={index}
            key={index}
          />
        ))}
      </Box>
    </Wrapper>
  );
}
