import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([
    { id: 1, type: 'Running', distance: 5, duration: 30, date: new Date() },
    { id: 2, type: 'Cycling', distance: 20, duration: 90, date: new Date() },
  ]);
  const [unit, setUnit] = useState('km'); // Default is kilometers

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts, unit, setUnit }}>
      {children}
    </WorkoutContext.Provider>
  );
};
