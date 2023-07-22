import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Main from "./Pages/Main";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Main />} />
          {/* <Route path="/homepage" element={<Homepage />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
