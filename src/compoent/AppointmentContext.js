// AppointmentContext.js
import React, { createContext, useContext, useState } from 'react';

const AppointmentContext = createContext();

export function useAppointment() {
  return useContext(AppointmentContext);
}

export function AppointmentProvider({ children }) {
  const [appointmentId, setAppointmentId] = useState(null);

  return (
    <AppointmentContext.Provider value={{ appointmentId, setAppointmentId }}>
      {children}
    </AppointmentContext.Provider>
  );
}
