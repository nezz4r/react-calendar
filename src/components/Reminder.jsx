import { Wrapper } from 'styles/components/Reminder.style';

export default function Reminder({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
