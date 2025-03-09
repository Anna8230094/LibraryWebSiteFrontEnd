import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import Nabar from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";

export const App=() =>{
  return (
    <div>
      <Nabar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
