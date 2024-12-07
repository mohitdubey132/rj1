import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import SeachBook from "./components/SeachBook"

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";
import "./styles/SeachBook.scss";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function App() {
    const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (event) => {
      const { type, payload } = event.data;

      if (type === 'NAVIGATE' && payload?.route) {
        navigate(payload.route); // Use useNavigate for React Router navigation
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage); // Clean up listener
    };
  }, [navigate]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/searchBook" element={<SeachBook />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
