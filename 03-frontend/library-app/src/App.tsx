import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import Nabar from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { SearchBookPage } from "./layouts/SearchBookPage/SearchBookPage";

export const App=() =>{
  return (
    <div>
      <Nabar />
      {/*<HomePage />*/}
      <SearchBookPage/>
      <Footer />
    </div>
  );
}

export default App;
