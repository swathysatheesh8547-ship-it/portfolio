import React from "react";

import Home from "./components/Home";
 import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
 import Contact from "./components/Contact";
 import Navbar from "./components/Navbar";
 //import Counter from "./components/Counter";
// import Data from "./components/Data ";

import "./App.css";

function App() {
  return (
    <div className="app">
       <Home /> 
      <About /> 
       <Skills /> 
      <Education /> 
       <Contact />
       <Navbar/>
       {/* <Counter/>  */}
      {/* <Data/> */}
    </div>
  );
}

export default App;