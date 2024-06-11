import React, { createContext, useState, useContext } from "react";

const FloatingPlayerContext = createContext();

export const FloatingPlayerProvider = ({ children }) => {
  const [isPlayerVisible, setPlayerVisible] = useState(false);

  const showPlayer = () => {
    setPlayerVisible(true);
  };

  const dismissPlayer = () => {
    setPlayerVisible(false);
  };

  return (
    <FloatingPlayerContext.Provider
      value={{ isPlayerVisible, showPlayer, dismissPlayer }}
    >
      {children}
    </FloatingPlayerContext.Provider>
  );
};

export const useFloatingPlayer = () => useContext(FloatingPlayerContext);
