import React from "react";
import "./App.css";
import Nabar from "./layouts/NavbarAndFooter/Navbar";
import ExploreTopBooks from "./layouts/HomePage/ExploreTopBooks";
import Carousel from "./layouts/HomePage/Carousel";

function App() {
  return (
    <div>
      <Nabar />
      <ExploreTopBooks />
      <Carousel/>
    </div>
  );
}

export default App;
