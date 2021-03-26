import React, { useContext, useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const RemindersContext = React.createContext();

export function useReminders() {
  return useContext(RemindersContext);
}

export default function RemindersProvider({ children, ...props }) {
  const [reminders, setReminders] = useLocalStorage('reminders', []);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentReminder, setCurrentReminder] = useState(null);
  const [currentReminderIndex, setCurrentReminderIndex] = useState(null);

  // const notify = new Audio('/notification.mp3');

  // prettier-ignore
  // useEffect(() => {
  //   Notification.requestPermission();
  // }, []);

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
