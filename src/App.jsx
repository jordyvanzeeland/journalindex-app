import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import { checkToken } from "./Functions";
import Journals from "./views/Journals";
import Categories from "./views/Categories";

const App = () => {

  checkToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/journals" element={localStorage.getItem('token') && localStorage.getItem('token') !== '' ? <Journals /> : <Login />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;