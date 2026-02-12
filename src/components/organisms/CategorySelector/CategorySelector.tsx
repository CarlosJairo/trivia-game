import styles from "./CategorySelector.module.scss";
import CategoryCard from "../../molecules/CategoryCard/CategoryCard";
import questionsData from "../../../data/questions.json";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

type CategoryData = {
  image: string;
  questions: Question[];
};

type QuestionsByCategory = {
  programming: CategoryData;
  maths: CategoryData;
  general: CategoryData;
};

export default function CategorySelector() {
  const questions = questionsData as QuestionsByCategory;

  return (
    <section className={styles.categorySelector}>
      {Object.entries(questions).map(([key, value]) => {
        return (
          <CategoryCard
            key={key}
            label={key}
            image={value.image}
            to={`/game/${key}`}
          />
        );
      })}
    </section>
  );
}
