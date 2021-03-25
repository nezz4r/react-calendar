import { Wrapper } from 'styles/components/Reminder.style';
import { useReminders } from 'contexts/RemindersContext';

export default function Reminder({
  day,
  reminder,
  index,
  sortedReminders,
  children,
  ...props
}) {
  const {
    setModalDay,
    setModalOpen,
    setOpenReminders,
    currentReminderIndex,
    setCurrentReminder,
    setCurrentReminderIndex,
  } = useReminders();

  function handleReminderClick() {
    setModalOpen(true);
    setModalDay(reminder.date);

    setOpenReminders(sortedReminders);
    setCurrentReminder(reminder);
    setCurrentReminderIndex(index);
    console.log(currentReminderIndex);
  }

  return (
    <Wrapper onClick={handleReminderClick} {...props}>
      {children}
    </Wrapper>
  );
}
