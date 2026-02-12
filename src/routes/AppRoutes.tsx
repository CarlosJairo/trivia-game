import { Route, Routes } from "react-router-dom";
import GamePage from "../pages/Game/GamePage";
import HomePage from "../pages/Home/HomePage";
import { ROUTES } from "../utils/constans";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.ALL} element={<HomePage />} />
      <Route path={ROUTES.GAME} element={<GamePage />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
