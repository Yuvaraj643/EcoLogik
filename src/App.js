import React,{useState, useEffect} from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Loader from "./Components/Loader/Loader";
import Auth from "./Components/Auth/Auth"
import CMain from "./Pages/CMain";
import Cost from "./Pages/Cost";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
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
            <Route path="/auth" element={<Auth />} />
            <Route path="/C02-dashboard" element={<CMain />} />
            <Route path="/Cost-dashboard" element={<Cost />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
