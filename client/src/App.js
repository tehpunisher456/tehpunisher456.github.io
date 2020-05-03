import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Contact from "./components/Contact"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
