import { Wrapper } from 'styles/components/Reminder.style';
import { useReminders } from 'contexts/RemindersContext';
import { useForm } from 'contexts/FormContext';

export default function Reminder({
  reminder,
  index,
  sortedReminders,
  children,
  ...props
}) {
  const {
    setModalOpen,
    setOpenReminders,
    setCurrentReminder,
    setCurrentReminderIndex,
  } = useReminders();

  const { setDate, setTime, setDesc, setTitle, setColor, setCity } = useForm();

  function handleReminderClick() {
    setModalOpen(true);
    setDate(reminder.date);
    setTime(reminder.time);
    setDesc(reminder.desc);
    setTitle(reminder.title);
    setColor(reminder.color);
    setCity(reminder.city);
    setOpenReminders(sortedReminders);
    setCurrentReminder(reminder);
    setCurrentReminderIndex(index);
  }

  return (
    <Wrapper onClick={handleReminderClick} {...props}>
      <span>{reminder?.title}</span>
      <span>{reminder.time}</span>
    </Wrapper>
  );
}
