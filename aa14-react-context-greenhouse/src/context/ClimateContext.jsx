// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState, useEffect } from 'react';

export const ClimateContext = createContext();

export const useClimateContext = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [climateTemp, setClimateTemp] = useState(50);
  const [climateHumidity, setClimateHumidity] = useState(40);

  const [displayTemp, setDisplayTemp] = useState(climateTemp);
  
    useEffect(() => {
        const timer = setTimeout(() => {setDisplayTemp(prevTemp => prevTemp + 1)}, 1000);
        return () => clearTimeout(timer);
        }, [displayTemp])


  return (
    <ClimateContext.Provider
      value={{
        climateTemp,
        setClimateTemp,
        climateHumidity,
        setClimateHumidity,
        displayTemp, 
        setDisplayTemp
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
}
