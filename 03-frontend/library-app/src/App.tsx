import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import Nabar from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { SearchBookPage } from "./layouts/SearchBookPage/SearchBookPage";
import { Route, Router, Routes } from "react-router";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nabar />
      <div className="flex-grow-1">
        <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/search" element={<SearchBookPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
