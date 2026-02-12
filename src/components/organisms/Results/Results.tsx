import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import type { Question } from "../../../utils/constans";
import styles from "./Results.module.scss";

interface ResultsProps {
  score: number;
  categoryQuestions: Question[];
}

const Results = ({ score, categoryQuestions }: ResultsProps) => {
  return (
    <div className={styles.resultsCtn}>
      <h2>Game Over!</h2>
      <p>
        Your final score is: {score} / {categoryQuestions.length}
      </p>
      <Button>
        <Link to={"/"}>Try again</Link>
      </Button>
    </div>
  );
};

export default Results;
