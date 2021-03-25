import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment';

import useLocalStorage from 'hooks/useLocalStorage';

const RemindersContext = React.createContext();

export function useReminders() {
  return useContext(RemindersContext);
}

export default function RemindersProvider({ children, ...props }) {
  const [reminders, setReminders] = useLocalStorage('reminders', []);
  const [isModalOpen, setModalOpen] = useState(false);
  const [openReminders, setOpenReminders] = useState(null);
  const [position, setPosition] = useState(null);
  const [currentReminder, setCurrentReminder] = useState(null);
  const [currentReminderIndex, setCurrentReminderIndex] = useState(null);

  // const notify = new Audio('/notification.mp3');

  // prettier-ignore
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>
        setPosition(position));
    }
    // Notification.requestPermission();
  }, []);

  // useEffect(() => {
  //   reminders.forEach((reminder) => {
  //     const now = moment(new Date());
  //     const reminderFormat = `${reminder.date} ${reminder.time}`;
  //     const timeToReminder = now.to(reminderFormat);
  //     if (timeToReminder === 'in a minute') {
  //       notify.play();
  //       sendNotification(reminder);
  //     } else {
  //       console.log(timeToReminder);
  //     }
  //   });
  // }, [reminders, Date.now()]);

  // function sendNotification(reminder) {
  //   if (Notification.permission === 'granted') {
  //     const notification = new Notification('You have an event in  minutes', {
  //       body: `${reminder.desc}`,
  //     });
  //   }
  // }

  return (
    <RemindersContext.Provider
      value={{
        reminders,
        setReminders,
        isModalOpen,
        setModalOpen,
        openReminders,
        setOpenReminders,
        currentReminder,
        setCurrentReminder,
        currentReminderIndex,
        setCurrentReminderIndex,
      }}
    >
      {children}
    </RemindersContext.Provider>
  );
}
