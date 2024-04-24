import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LogoHeader from "./core/LogoHeader";
import MainPage from "./features/MainPage";
import InfoPage from "./features/InfoPage";
import DetailsPage from "./features/DetailsPage";

function App() {
  return (
    <>
      <LogoHeader />

      <Routes>
        <Route
          path="/user/:username"
          element={<DetailsPage />}
        />

        <Route
          path="/user"
          element={<Navigate to="/" />}
        />

        <Route
          path="/info"
          element={<InfoPage />}
        />

        <Route
          path="/"
          element={<MainPage />}
        />
      </Routes>
    </>
  );
}

export default App;