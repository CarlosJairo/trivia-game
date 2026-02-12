import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";
import GameLayout from "../../components/templates/GameLayout";
import { UI_TEXT } from "../../utils/uiText";

interface NotFoundProps {
  title: string;
  subtitle?: string;
}

const NotFound = ({ title, subtitle }: NotFoundProps) => {
  return (
    <GameLayout>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}

      <Button>
        <Link to={"/"}>{UI_TEXT.goBack}</Link>
      </Button>
    </GameLayout>
  );
};

export default NotFound;
