import { Wrapper, Title, HoverDiv } from 'styles/components/Reminder.style';
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

  function handleReminderClick(e) {
    e.preventDefault();
    setModalOpen(true);
    setDate(reminder.date);
    setTime(reminder.time);
    setDesc(reminder.desc);
    setTitle(reminder.title);
    setColor(reminder.color);
    setCity(reminder.city);
    setCurrentReminder(reminder);
    setCurrentReminderIndex(index);
  }

  return (
    <>
      <Wrapper onClick={handleReminderClick} color={reminder.color} {...props}>
        <Title>{reminder?.title}</Title>
        <span>{reminder.time}</span>
      </Wrapper>
      <HoverDiv>{reminder.desc}</HoverDiv>
    </>
  );
}
