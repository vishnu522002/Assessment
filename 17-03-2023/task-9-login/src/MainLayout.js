import NavBar from "./components/Navbar";
import ViewTransactions from "./components/ViewTransactions";
import "bootstrap/dist/css/bootstrap.min.css";
import UserPage from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateTransaction from "./components/CreateTransaction";

function MainLayout() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/transaction" element={<CreateTransaction />} />
        <Route exact path="/account" element={<UserPage />} />
        <Route exact path="/transactions" element={<ViewTransactions />} />
      </Routes>
    </div>
  );
}

export default MainLayout;
