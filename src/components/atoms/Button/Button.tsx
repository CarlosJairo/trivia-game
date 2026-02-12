import useTheme from "../../../context/ThemeContext/useTheme";
import { DARK } from "../../../utils/constans";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  onClick,
  variant,
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();
  return (
    <button
      onClick={onClick}
      {...rest}
      className={`${styles["button"]} ${theme === DARK ? styles["button--dark"] : ""} ${variant ? styles[`button--${variant}`] : ""}`}
    >
      {children}
    </button>
  );
}
