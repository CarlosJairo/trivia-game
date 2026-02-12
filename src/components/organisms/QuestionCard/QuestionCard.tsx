import AnswerOption from "../../molecules/AnswerOption/AnswerOption";
import styles from "./QuestionCard.module.scss";
import useTheme from "../../../context/ThemeContext/useTheme";
import { DARK } from "../../../utils/constans";
import { useEffect, useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuestionCardProps = {
  questionData: Question;
  onAnswer: (selectedOption: string) => void;
};

type AnswerState = "idle" | "correct" | "wrong";

export default function QuestionCard({
  questionData,
  onAnswer,
}: QuestionCardProps) {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, [questionData.id]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [questionData.id]);

  return (
    <section
      className={`
      ${styles.card}
      ${animate ? styles.animate : ""}
      ${theme === DARK ? styles["card--dark"] : ""}
    `}
    >
      <h3>{questionData.question}</h3>

      <div className={styles["card__buttons-ctn"]}>
        {questionData.options.map((option) => {
          let state: AnswerState = "idle";

          if (selectedOption) {
            if (option === questionData.correctAnswer) {
              state = "correct";
            } else if (option === selectedOption) {
              state = "wrong";
            }
          }

          return (
            <AnswerOption
              key={option}
              option={option}
              onSelect={handleSelect}
              state={state}
            />
          );
        })}
      </div>
    </section>
  );
}
