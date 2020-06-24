import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar.jsx";

import Background from './components/background/background.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Background/>
    </div>
  );
}

export default App;
