import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
