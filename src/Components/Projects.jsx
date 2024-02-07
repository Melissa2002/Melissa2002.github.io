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
                <Button onClick={()=> window.open("https://docs.google.com/presentation/d/1TA0Y1yJYtrWBmrIt7bzS5UMDWPzaz9a8t3xG3fjCxlA/edit?usp=sharing", "_blank")}>
                  <h3>CGM Fingerprinting Project</h3>
                <img src={CGM} width="80%" height="auto"></img>
                </Button>
              </div>
              <div class="item item-2">
              <Button onClick={()=> window.open("https://docs.google.com/presentation/d/1lLPm_F4HUlg73Bu0c_pAar3Y3ujj3rf_vV5nmeaW6jo/edit?usp=sharing", "_blank")}>
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