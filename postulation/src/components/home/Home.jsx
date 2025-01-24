import React from "react";
import Footer from '../footer/Footer.jsx';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {

  return (
    <>
      <div className="div-home">
        <h1 className="text-home">Do you want to be part of EquipoDot Guru?</h1>
        <p className="slogan-home">Click below to subscribe and become part of our community.</p>
        <div className="buttons-home">
        <Link to="/subscribe" className="button-home">SUBSCRIBE HERE</Link>
        <Link to="/about" className="button-home">ABOUT THE PROJECT</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
