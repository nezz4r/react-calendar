import axios from 'axios';

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
  constructor(title, desc, date, time, city, color) {
    this.title = title;
    this.desc = desc;
    this.city = city;
    this.date = date;
    this.time = time;
    this.color = color;
  }
}

export async function getWeatherData(city) {
  const data = await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  return data;
}
