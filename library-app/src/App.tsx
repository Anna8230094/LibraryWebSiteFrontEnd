import React from "react";
import "./App.css";

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
      <div className="container-fluid">
        <span className="navbar-brand">Luv 2 Read</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-tartget="#navbarNavDropDown"
          aria-controls="navbarNavDropDown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collaps navbar-collaps" id="navbarDropDown">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="#">
                Search Books
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item m-1">
              <a type="button" className="nav-link" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
