import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Skill from './Componets/Skill';
import Home from './Componets/Home';
import About from './Componets/About';
import Services from './Componets/Services';
import Projects from './Componets/Projects';
import Contact from './Componets/Contacte';
import Footer from './Componets/Footer';

const MainPage = () => {
  return (
    <>
    {/* <h1 className='bg-red-500'>heelo</h1> */}
      <Navbar />

      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skill"><Skill /></div>
      <div id="services"><Services /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
