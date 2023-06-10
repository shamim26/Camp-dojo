import { createContext, useState } from "react";

export const DarkContext = createContext(null);

const DarkMoodContext = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const state = {
    isDarkMode,
    setIsDarkMode,
  };
  return <DarkContext.Provider value={state}>{children}</DarkContext.Provider>;
};

export default DarkMoodContext;
