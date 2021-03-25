export function buildCalendar(value) {
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');
  const day = startDay.clone().subtract(1, 'day');
  const calendar = [];

  while (day.isBefore(endDay, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }
  return calendar;
}

export function isSelected(day, value) {
  return value.isSame(day, 'day');
}

export function isBeforeToday(day) {
  return day.isBefore(new Date(), 'day');
}

export function isSameMonth(day, value) {
  return day.isSame(value, 'month');
}

export function isToday(day) {
  return day.isSame(new Date(), 'day');
}

export function isWeekend(day) {
  return day.day() === 0 || day.day() === 6;
}

export class ReminderClass {
  constructor(desc, date, time, city, color) {
    this.desc = desc;
    this.date = date;
    this.time = time;
    this.city = city;
    this.color = color;
  }
}
