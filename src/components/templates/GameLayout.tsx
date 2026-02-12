import { DarkIcon, LightIcon } from "../../assets/IconsSVG";
import useTheme from "../../context/ThemeContext/useTheme";
import { DARK } from "../../utils/constans";
import Button from "../atoms/Button/Button";
import styles from "./GameLayout.module.scss";

type GameLayoutProps = {
  children: React.ReactNode;
};

export default function GameLayout({ children }: GameLayoutProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`${styles["layout"]} ${theme === DARK && styles["layout--dark"]}`}
    >
      <h1>Trivia Game 🎯</h1>
      {children}
      <Button onClick={toggleTheme} variant={"icon"}>
        {theme === DARK ? <LightIcon /> : <DarkIcon />}
      </Button>
    </div>
  );
}
