import { useState } from "react";
import questions from "../../data/questions.json";
import GameLayout from "../../components/templates/GameLayout";
import { useParams } from "react-router-dom";
import QuestionCard from "../../components/organisms/QuestionCard/QuestionCard";
import Results from "../../components/organisms/Results/Results";
import type { Question } from "../../utils/constans";
import { UI_TEXT } from "../../utils/uiText";

const GamePage: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const { category } = useParams();

  const categoryQuestions: Question[] =
    questions[category as keyof typeof questions].questions;

  const currentQuestion: Question = categoryQuestions[index];

  const handleAnswer = (selectedOption: string) => {
    if (!selectedOption) return;

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => setIndex((prevIndex) => prevIndex + 1), 500);
  };

  if (!category || !questions[category as keyof typeof questions]) {
    return <div>{UI_TEXT.categoryNotFound}</div>;
  }

  if (index === categoryQuestions.length) {
    return (
      <GameLayout>
        <Results score={score} categoryQuestions={categoryQuestions} />
      </GameLayout>
    );
  }

  return (
    <GameLayout>
      <QuestionCard questionData={currentQuestion} onAnswer={handleAnswer} />
    </GameLayout>
  );
};

export default GamePage;
