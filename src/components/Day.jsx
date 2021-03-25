import { useState } from 'react';
import { Wrapper, Box, Title, Button } from 'styles/components/Day.style';
import { isSelected, isToday, isSameMonth, isWeekend } from 'helpers';
import { useCalendar } from 'contexts/CalendarContext';
import { useReminders } from 'contexts/RemindersContext';
import moment from 'moment';
import { ThreeDots } from '@icons';
import Reminder from 'components/Reminder';
import ReminderModal from 'components/ReminderModal';

const arrFill = [
  {
    desc: 'this is a reminder',
    date: '20210322',
    time: '2030',
    color: 'turquoise',
  },
  {
    desc: 'this is a reminder',
    date: '2021-03-24',
    time: '2030',
    color: 'red',
  },
  {
    desc: 'this is a reminder',
    date: '2021-03-24',
    time: '2030',
    color: 'turquoise',
  },
  {
    desc: 'this is a reminder',
    date: '2021-03-24',
    time: '2030',
    color: 'turquoise',
  },
  {
    desc: 'this is a reminder',
    date: '2021-03-24',
    time: '2030',
    color: 'turquoise',
  },
  {
    desc: 'this is a reminder',
    date: '2021-03-26',
    time: '2030',
    color: 'blue',
  },
];

export default function Day({ children, day, ...props }) {
  const [unfilteredReminders, setUR] = useState(arrFill);
  const { modalDay, setModalDay, setModalOpen } = useReminders();
  const { value } = useCalendar();

  const reminders = unfilteredReminders.filter((reminder) => {
    return day.isSame(moment(reminder.date), 'day');
    console.log('');
  });

  function handleClick() {
    setModalOpen(true);
    setModalDay(day);
  }

  return (
    <Wrapper>
      <Button onClick={handleClick}>
        <ThreeDots />
      </Button>
      <ReminderModal />
      <Box
        selected={isSelected(day, value)}
        before={!isSameMonth(day, value)}
        weekend={isWeekend(day)}
        {...props}
      >
        <Title today={isToday(day)}>{children}</Title>
        {reminders.map((reminder) => (
          <Reminder color={reminder.color}>{reminder.desc}</Reminder>
        ))}
      </Box>
    </Wrapper>
  );
}
