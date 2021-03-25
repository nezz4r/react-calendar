import { Wrapper, CloseButton } from 'styles/components/ReminderModal.style';
import { useReminders } from 'contexts/RemindersContext';
import ReminderForm from 'components/ReminderForm';
import { CloseIcon } from '@icons';

export default function ReminderModal({ children, ...props }) {
  const { isModalOpen, setModalOpen } = useReminders();

  function handleClose() {
    setModalOpen(false);
  }

  return (
    <Wrapper isOpen={isModalOpen} {...props}>
      <div>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        <ReminderForm />
      </div>
    </Wrapper>
  );
}
