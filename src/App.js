import {
  Routes,
  Route
} from "react-router-dom";
import LogoHeader from "./core/LogoHeader";
import MainPage from "./features/MainPage";

function App() {
  return (
    <>
      <LogoHeader />

      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
      </Routes>
    </>
  );
}

export default App;