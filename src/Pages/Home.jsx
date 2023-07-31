import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Homepage from "../Components/Homepage/Homepage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  useEffect(() => {
    toast.success("Click Get-Started-Buttons to view sample Dashboards---------------Team Node Noir😊", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Homepage />
    </>
  );
};

export default Home;
