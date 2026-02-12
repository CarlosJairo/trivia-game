export type Theme = "light" | "dark";

export const LIGHT = "light";
export const DARK = "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};
