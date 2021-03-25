import { useState } from 'react';
import { Box, Title } from 'styles/components/Day.style';

import { useCalendar } from 'contexts/CalendarContext';

export default function Day({ children, day, ...props }) {
  const { value } = useCalendar();
  const [today] = useState(value);

  return (
    <div>
      <Box selected={value.isSame(day, 'day')} {...props}>
        <Title today={today.isSame(day, 'day')}>{children}</Title>
      </Box>
    </div>
  );
}
