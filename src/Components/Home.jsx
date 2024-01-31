import React from "react";
import Me from "./Attach0.jpg"

function Home() {
    return (
        <>
            <img src={Me}  alt="MyProfile" width="300" height="300"/>
            <p>Welcome to my personal portfolio! I created this website so that I 
                could document personal projects, as well as challenge myself to learn 
                new coding skills like React, Javascript, and Bootstrap. Please enjoy learning about
                me and reach out if you have any comments or questions. 
            </p>
       </>
    );
  }
  
  export default Home;