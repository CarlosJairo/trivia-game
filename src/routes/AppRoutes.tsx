import { Route, Routes } from "react-router-dom";
import GamePage from "../pages/Game/GamePage";
import HomePage from "../pages/Home/HomePage";
import { ROUTES } from "../utils/constans";
import NotFound from "../pages/NotFound/NotFound";
import { UI_TEXT } from "../utils/uiText";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.ALL} element={<HomePage />} />
      <Route path={ROUTES.GAME} element={<GamePage />} />
      <Route
        path={ROUTES.NOT_FOUND}
        element={<NotFound title={UI_TEXT.pageNotFound} />}
      />
    </Routes>
  );
};

export default AppRoutes;
