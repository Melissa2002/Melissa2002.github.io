import React from "react";
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <>
        <h2>Contact</h2>
         <p> Let's chat! I am always looking for new projects and collaborations. </p>
        <Button  href="https://example.com" style={{ color: "#61dafb", padding: "10px 20px" }}
        >Email: Melissa.e.osheroff@gmail.com</Button>
        <Button  href="https://example.com" style={{ color: "#61dafb", padding: "10px 20px" }}
        >Phone: (415) 590-1894</Button>
        </>
    
    );
  }
  
  export default Contact;