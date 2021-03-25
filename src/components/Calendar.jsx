import { useCalendar } from 'contexts/CalendarContext';

import Month from 'components/Month';
import Week from 'components/Week';
import Day from 'components/Day';

export default function Calendar() {
  // prettier-ignore
  const {
    value, setValue, calendar, setCalendar
  } = useCalendar();

  return (
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
  );
}
