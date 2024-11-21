/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Componentes/Header";
import "./App.css";
import "./Fonts.css";
import "./Cores.css";
import { BrowserRouter } from "react-router-dom";
import Introducao from "./Componentes/Introducao/Introducao";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Introducao />
      </BrowserRouter>
    </div>
  );
};

export default App;
