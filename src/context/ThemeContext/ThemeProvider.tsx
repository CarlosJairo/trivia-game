import { useMemo, useState } from "react";
import {
  DARK,
  LIGHT,
  type Theme,
  type ThemeProviderProps,
} from "../../utils/constans";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(LIGHT);

  const toggleTheme = () => setTheme((prev) => (prev === LIGHT ? DARK : LIGHT));

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };
