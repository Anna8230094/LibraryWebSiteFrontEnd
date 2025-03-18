import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import Nabar from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { SearchBookPage } from "./layouts/SearchBookPage/SearchBookPage";
import { Route, Router, Routes } from "react-router";

export const App = () => {
  return (
    <div>
      <Nabar />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/search" element={<SearchBookPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
