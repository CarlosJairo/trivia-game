import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import type { Question } from "../../../utils/constans";
import styles from "./Results.module.scss";
import { UI_TEXT } from "../../../utils/uiText";

interface ResultsProps {
  score: number;
  categoryQuestions: Question[];
}

const Results = ({ score, categoryQuestions }: ResultsProps) => {
  return (
    <div className={styles.resultsCtn}>
      <h2>{UI_TEXT.gameOver}</h2>
      <p>
        {UI_TEXT.finalScore} {score} / {categoryQuestions.length}
      </p>
      <Button>
        <Link to={"/"}>{UI_TEXT.tryAgain}</Link>
      </Button>
    </div>
  );
};

export default Results;
