import CategorySelector from "../../components/organisms/CategorySelector/CategorySelector";
import GameLayout from "../../components/templates/GameLayout";

const HomePage: React.FC = () => {
  return (
    <GameLayout>
      <CategorySelector />
    </GameLayout>
  );
};

export default HomePage;
