import GamePage from "./pages/Game/GamePage";
import HomePage from "./pages/Home/HomePage";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:category" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
