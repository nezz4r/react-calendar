import {
  TitleWrapper,
  Title,
  WeekDaysWrapper,
  WeekDay,
} from 'styles/components/Header.style';
import { useCalendar } from 'contexts/CalendarContext';
import { ArrowLeftIcon, ArrowRightIcon } from '@icons';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Header({ children, ...props }) {
  const { value, setValue } = useCalendar();

  function prevMonth() {
    return value.clone().subtract(1, 'month').date(1);
  }
  function nextMonth() {
    return value.clone().add(1, 'month').date(1);
  }

  return (
    <>
      <TitleWrapper {...props}>
        <ArrowLeftIcon onClick={() => setValue(prevMonth())} />
        <Title>
          {value.format('MMMM')} {value.format('YYYY')}
        </Title>
        <ArrowRightIcon onClick={() => setValue(nextMonth())} />
      </TitleWrapper>
      <WeekDaysWrapper>
        {weekDays.map((day, index) => (
          <WeekDay key={index}>{day}</WeekDay>
        ))}
      </WeekDaysWrapper>
    </>
  );
}
