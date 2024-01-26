import React from "react";
import Me from "./Attach0.jpg"

function Header() {
    return (
        <>
            <h1>
            Melissa E. Osheroff
            </h1>
            <img src={Me}  alt="MyProfile" width="300" height="300"/>
            <p>Welcome to my personal portfolio! I created this website so that I 
                could document personal projects, as well as challenge myself to learn 
                new coding skills like React and Javascript. Please enjoy learning about
                me, and please reach out. I would love an opportunity to connect!
            </p>
        </>
    );
  }
  
  export default Header;