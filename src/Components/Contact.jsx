import React from "react";
import Button from 'react-bootstrap/Button';
import Email from './mail.png'
import Phone from './mobile-clipart-md.png'
import ResumePng from './resumeicon.png'

function Contact() {
    return (
        <>
        <head>
       
        </head>
        
        <h2>Contact</h2>
         <p> Let's chat! I am always looking for new projects and collaborations. </p>
         <tr>
            <td>
            <Button href="mailto:melissa.e.osheroff@gmail.com?subject=Business%20Inquiries%20Through%20Portfolio">
                    <img src={Email} width="75%" />
                    <br></br>
                    Email
                    </Button>
            </td>
            
            <td>
            <Button href="tel:4155901894">
                    <img src={Phone} width="60%"></img> 
                    <br></br>
                    Phone
            </Button>
            </td>
            <td>
            <Button href="https://drive.google.com/file/d/1C4S_4A7KjHSumRafDZuZHzzaKnhjhFov/view?usp=sharing" target="blank">
                    <img src={ResumePng} width="30%"/> 
                    <br></br>
                     Resume
                    </Button>
            </td>
         </tr>
        </>
    
    );
  }
  
  export default Contact;