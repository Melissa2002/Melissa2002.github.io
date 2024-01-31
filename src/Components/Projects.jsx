import React from "react";

function Projects() {
    return (
        <>
            <h1>
            Projects
            </h1>
            <tr>
           <td>
            <h3>Undergraduate Reasearch Assistant @UCSD Medical School: 06/2022-12/2022</h3>
              <p>
                As an undergraduate research assistant I mainly worked on methods of analyzing continuous glucose monitoring trace: specifically, determining if an individual's glucose trace 
                was uniquely identifiable to them. I developed python code aimed at determining similarities between different days of a patient's raw continuous glucose monitoring data using 
                correlation matrices, dendograms, principal component analysis, and k-means.                                                                                                                                                                                                            
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRgAto5EIE1rhVAv58mjEgShb8LUeUATJNh25suBew1etJb_CU24o4aw9nrPD8TYQ-vm6sHlXFflGG9/embed?start=false&loop=false&delayms=3000" frameborder="0" width="500px" height="400px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
              </p>
          </td>
          <td>
            <h3>Medical Imaging Data Engineering Intern @Surgalign: 01/2023-07/2023</h3>
              <p>
              For this project, I created a code in Python that could parse out values from a csv file in order to the organize subsets based on manufacturer and model of the machine (see presentation 
              below). The internship continued into my spring quarter of junior year where I then expanded to create an interactive web app that could combine datasets from the company database 
              and compare various metrics, but cannot disclose findings. 
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSaZMFXcJxoPiZtQEeEUMKrU706nUAebnk2KtWgknyqEUAOjyL22Fyk7IotvWfsLBCWKFsSKELGlCBc/embed?start=false&loop=false&delayms=3000" frameborder="0" width="500px" height="400px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> 
              </p>  
          </td>
        </tr>
        <tr>
            <td>
            <h3>Cloud Developer Intern @Codex Health: 06/2023-09/2023</h3>
              <p>
                During my internship I designed, developed, and implemented 3 REST APIs which provided clinicians with real-time patient data using Golang. 
                Because I was building off previously developed source code, I performed +5 code refactors and a data migration in order to meet the needs of
                the design. I also completed miscelaneous tasks including audit logging, debugging, and synthetic tests.
              </p>
          </td>
            <td>
             <h3>AVID Tutor @Escondido High School: 01/2023-06/2023</h3>
              <p>
                As an AVID tutor, I provided  educational support to up to 7 high school students at a time in subjects including AP Physics, AP Calculus, AP Computer Science, and AP Biology 9hrs/week.
                This included walking through practice questions, brainstorming new problem solving methods, and organizing group work.
                </p>
            </td>
        </tr>          
        </>
    );
  }
  
  export default Projects;