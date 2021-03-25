import { useCalendar } from 'contexts/CalendarContext';

import { Wrapper } from 'styles/components/Calendar.style';
import Header from 'components/Header';
import Month from 'components/Month';
import Week from 'components/Week';
import Day from 'components/Day';

export default function Calendar() {
  // prettier-ignore
  const {
    setValue, calendar,
  } = useCalendar();

  return (
    <Wrapper>
      <Header />
      <Month>
        {calendar.map((week) => (
          <Week>
            {week.map((day) => (
              <Day day={day} onClick={() => setValue(day)}>
                {day.format('D')}
              </Day>
            ))}
          </Week>
        ))}
      </Month>
    </Wrapper>
  );
}
