import React from "react";
import Me from "./Attach0.jpg"

function Home() {
    return (
        <div class="row">
            <div class="column left" width="60%">
            <p> Hi there! My name is Melissa, and this is my personal portfolio where I hope
                to document coding projects. Please enjoy learning about me, and don't be
                shy to reach out if you have any comments or questions. 
            </p>
            </div>
            <div class="column right" width="40%">
                <img src={Me}  alt="MyProfile" width="80%" height="auto"/>
            </div>
        </div>
            
    );
  }
  
  export default Home;