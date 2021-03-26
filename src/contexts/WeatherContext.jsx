import React, { useContext, useState, useEffect } from 'react';

const WeatherContext = React.createContext();

export function useWeather() {
  return useContext(WeatherContext);
}

export default function WeatherProvider({ children, ...props }) {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>
        setPosition(position)
      );
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        position,
        setPosition,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
