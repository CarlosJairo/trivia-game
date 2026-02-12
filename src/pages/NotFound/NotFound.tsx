import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";
import GameLayout from "../../components/templates/GameLayout";
import { UI_TEXT } from "../../utils/uiText";

const NotFound = () => {
  return (
    <GameLayout>
      {UI_TEXT.pageNotFound}
      <Button>
        <Link to={"/"}>{UI_TEXT.goBack}</Link>
      </Button>
    </GameLayout>
  );
};

export default NotFound;
