import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme context only works wihin a provider");
  }

  return context;
};

export default useTheme;
