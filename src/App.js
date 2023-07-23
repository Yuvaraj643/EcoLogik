import React,{useState, useEffect} from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Loader from "./Components/Loader/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Main />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
