import React from "react";
import CGM from "./images/CGM.png";
import Surgalign from "./images/Surgalign.png"
import Button from 'react-bootstrap/Button';

function Projects() {
    return (
        <>
            <h2>
            Projects
            </h2>
            <div class="container">
              <div class="item item-1">
                <Button> 
                  <h3>CGM Fingerprinting Project</h3>
                <img src={CGM} width="80%" height="auto"></img>
                </Button>
              </div>
              <div class="item item-2">
              <Button>
                <h3>
                Medical Imaging Data QC
                </h3>
                <img src={Surgalign} width="80%" height="auto"></img>
                </Button>
              </div>
            </div>
    
        </>
    );
  }
  
  export default Projects;