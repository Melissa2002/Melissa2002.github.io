import React from "react";
import Me from "./Attach0.jpg"

function Home() {
    return (
        <div class="clearfix">
            <img src={Me} width="25%" height="auto" class="col-md-6 float-md-end mb-3 ms-md-3"></img>

            <p>
            Hi there! My name is Melissa, and this is my personal portfolio where I hope
            to document coding projects. Please enjoy learning about me, and don't be
            shy to reach out if you have any comments or questions.
            </p>
            <p> NOTE: this page is currently a work in progress as I am using it as a 
                learning experience. For that reason, please understand you might access
                 it in between renovations. 
            </p>
        </div> 

        );
  }
  
  export default Home;