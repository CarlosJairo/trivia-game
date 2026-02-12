import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.scss";

type CategoryCardProps = {
  label: string;
  image: string;
  to: string;
};

export default function CategoryCard({ label, image, to }: CategoryCardProps) {
  return (
    <Link to={to} className={styles.card}>
      <img src={image} alt={label} className={styles.card__image} />
      <span className={styles.card__label}>{label}</span>
    </Link>
  );
}
