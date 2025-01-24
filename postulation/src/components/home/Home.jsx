import React from "react";
import Footer from '../footer/Footer.jsx';
import './Home.css';

const Home = () => {

  return (
    <>
      <div className="div-home">
        <h1 className="text-home">Do you want to be part of Equipodot Guru?</h1>
        <p className="slogan-home">Click below to subscribe and become part of our community.</p>
        <div className="buttons-home">
        <a href="/subscribe" className="button-home">
          SUBSCRIBE HERE
        </a>
        <a href="/about" className="button-home">
        ABOUT THE PROJECT
        </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
