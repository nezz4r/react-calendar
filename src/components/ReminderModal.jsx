import { Wrapper } from 'styles/components/ReminderModal.style';

export default function ReminderModal({
  reminder,
  setReminder,
  children,
  ...props
}) {
  return <Wrapper {...props} />;
}
