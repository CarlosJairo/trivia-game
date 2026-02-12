import { createContext } from "react";
import { type ThemeContextType } from "../../utils/constans";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
