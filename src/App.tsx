import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App";
import { Navbar } from "./components/shared/Navbar/Navbar";
import { Home } from "./pages/Home/home";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
