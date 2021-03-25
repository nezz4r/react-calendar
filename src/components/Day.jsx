import moment from 'moment';

import { Wrapper, Box, Title, Button } from 'styles/components/Day.style';
import { PlusIcon } from '@icons';
import Reminder from 'components/Reminder';
import { useCalendar } from 'contexts/CalendarContext';
import { useReminders } from 'contexts/RemindersContext';
import { useForm } from 'contexts/FormContext';

import { isSelected, isToday, isSameMonth, isWeekend } from 'helpers';

export default function Day({ children, day, ...props }) {
  const {
    setModalOpen,
    reminders,
    setOpenReminders,
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
  function handleClick() {
    setModalOpen(true);
    setDate(day.format('YYYY-MM-DD'));
    setTime(moment().format('HH:mm'));
    setDesc('');
    setTitle('');
    setColor('black');
    setCity('');
    setOpenReminders(sortedReminders);
    setCurrentReminder(null);
    setCurrentReminderIndex(null);
  }

  return (
    <Wrapper>
      <Button onClick={() => handleClick()}>
        <PlusIcon />
      </Button>

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
            color={reminder.color}
          />
        ))}
      </Box>
    </Wrapper>
  );
}
