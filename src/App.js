import React from "react";
import "./style/App.css";
import Homepage from "./components/pages/Homepage";
import Cgpa from "./components/pages/Cgpa";
import Memory from "./components/pages/Memory";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Style from "./components/pages/Style";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cgpa" element={<Cgpa />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/learning-style" element={<Style />} />
      </Routes>
    </Router>
  );
};

export default App;
