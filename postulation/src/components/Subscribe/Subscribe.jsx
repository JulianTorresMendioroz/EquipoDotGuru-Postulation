import React, { useState } from "react";
import LogoSubscribe from '../../assets/logo-subscribe.png';
import Footer from '../footer/Footer.jsx';
import toast, { Toaster } from 'react-hot-toast'; 
import './Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState(''); 
  const [error, setError] = useState(''); 

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setError("Email field cannot be empty.");
      toast.error("Email field cannot be empty."); 
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address."); 
      toast.error("Invalid email. Please check again."); 
    } else {
      setError(""); 
      toast.success("Congratulations, you are subscribed!"); 
      setEmail(''); 
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className='div-subscribe'>
        <img className='logo-subscribe' src={LogoSubscribe} alt="logo-plane" />
        <h1 className='text-subscribe'>SUBSCRIBE</h1>
     
          <input 
            className='input-subscribe' 
            type="email" 
            placeholder='Enter Your Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
         
        <button className='button-subscribe' onClick={handleSubscribe}>SUBSCRIBE</button>
      </div>
      <Footer />

    </>
  );
};

export default Subscribe;
