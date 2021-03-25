import React, { useContext, useState } from 'react';

import useLocalStorage from 'hooks/useLocalStorage';

const RemindersContext = React.createContext();

export function useReminders() {
  return useContext(RemindersContext);
}

export default function RemindersProvider({ children, ...props }) {
  const [reminders, setReminders] = useLocalStorage('reminders', []);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalDay, setModalDay] = useState(null);
  const [menuDay, setMenuDay] = useState(null);

  return (
    <RemindersContext.Provider
      value={{
        reminders,
        setReminders,
        isModalOpen,
        setModalOpen,
        modalDay,
        setModalDay,
        menuDay,
        setMenuDay,
      }}
    >
      {children}
    </RemindersContext.Provider>
  );
}
