import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route index path="/" element={<LandingPage />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
