import {
  Routes,
  Route
} from "react-router-dom";
import LogoHeader from "./core/LogoHeader";
import MainPage from "./features/MainPage";
import InfoPage from "./features/InfoPage";

function App() {
  return (
    <>
      <LogoHeader />

      <Routes>

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