import React from "react";
import Me from "./Attach0.jpg"

function Home() {
    return (
        <div class="" >
            <div class= "item item-2">
            <h3>I am so happy that you're here...</h3>
            </div>

            <div class="item item-1">
                <img src={Me} width="20%" height="auto" ></img>
            </div>
            <div class="item description">
                <p>
                Hi there! My name is Melissa, and I am completing my degree in bioinformatics this Spring  
                from the University of California, San Diego. My passion lies in finding real-life applications 
                of computer science and data analytics. I hope to leverage my understanding of algorithms and
                technology to create a positive impact in the world. I created this personal portfolio for the 
                purpose of document coding projects and professional experiences. Please enjoy learning about me,
                and don't be shy to reach out if you have any comments or questions!
                </p>
                <p> NOTE: this page is currently a work in progress as I am using it as a 
                    learning experience. For that reason, please understand you might access
                    it inbetween renovations. 
                </p>
            </div>
</div>
        );
  }
  
  export default Home;