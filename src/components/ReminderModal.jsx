import { Wrapper, CloseButton } from 'styles/components/ReminderModal.style';
import { useReminders } from 'contexts/RemindersContext';
import ReminderForm from 'components/ReminderForm';
import Reminder from 'components/Reminder';

export default function ReminderModal({ children, ...props }) {
  const { isModalOpen, setModalOpen, openReminders } = useReminders();

  return (
    <Wrapper isOpen={isModalOpen} {...props}>
      <CloseButton onClick={() => setModalOpen(false)} />
      <ReminderForm />

      {openReminders?.map((reminder, index) => (
        <Reminder key={index} color={reminder.color}>
          {reminder.title}
        </Reminder>
      ))}
    </Wrapper>
  );
}
