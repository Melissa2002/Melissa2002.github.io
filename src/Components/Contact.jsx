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
            <Button onClick={()=> window.open("mailto:melissa.e.osheroff@gmail.com", "_blank")}>
                    <img src={Email} width="50%"></img> 
                    <br></br>
                    Email
                    </Button>
            </td>
            
            <td>
            <Button onClick={()=> window.open("tel:4155901894")}>
                    <img src={Phone} width="50%"></img> 
                    <br></br>
                    Phone
            </Button>
            </td>
            <td>
            <Button onClick={()=> window.open("https://drive.google.com/file/d/1C4S_4A7KjHSumRafDZuZHzzaKnhjhFov/view?usp=sharing", "_blank")}>
                    <img src={ResumePng} width="20%"/> 
                    <br></br>
                     Resume
                    </Button>
            </td>
         </tr>
        </>
    
    );
  }
  
  export default Contact;