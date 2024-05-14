import { useRef } from "react"


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
}