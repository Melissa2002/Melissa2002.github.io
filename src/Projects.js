import './App.css';
import React from "react";
import Home from "./Components/Home.jsx"
import Header from "./Components/Name.jsx"
import Contact from "./Components/Contact.jsx"
import { useRef } from "react"
import AboutMe from "./Components/AboutMe.jsx"
import Projects from "./Components/Projects.jsx"


function App() {
  const home = useRef(null);
  const contact = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);
  
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop, 
      behavior: "smooth"
    })
  }
    

  return (
    <>
      
    <Header></Header>
    
      <button onClick={() => scrollToSection(home)} className="link"> Home </button>
      <button onClick={() => scrollToSection(projects)} className="link"> Projects </button>
      <button onClick={() => scrollToSection(contact)} className="link"> Contact </button>
      <button onClick={() => scrollToSection(about)} className="link"> About Me </button>
 
    </>
  );
}

export default App;