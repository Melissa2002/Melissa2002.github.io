import React from "react";
import Button from 'react-bootstrap/Button';
import Email from './Email.jpeg'

function Contact() {
    return (
        <>
        <h2>Contact</h2>
         <p> Let's chat! I am always looking for new projects and collaborations. </p>
         <button href="mailto:melissa.e.osheroff@gmail.com?subject=Business%20Inquiries%20Through%20Portfolio"  target="_top">
            <img src={Email} border="0" />
        </button>
        <a  href="mailto:melissa.e.osheroff@gmail.com?subject=Business%20Inquiries%20Through%20Portfolio"  target="_top" 
        >Email: Melissa.e.osheroff@gmail.com</a>
        <br/>
        <Button  href="tel:4155901894" 
        >Phone: (415) 590-1894</Button>
        </>
    
    );
  }
  
  export default Contact;