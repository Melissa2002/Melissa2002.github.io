window.addEventListener('DOMContentLoaded', init);

function init() {

  const homeButton = document.getElementById("home-button");
  homeButton.addEventListener("click",() =>  scrollHome("introduction"));

  const githubButton = document.getElementById("github-button");
  githubButton.addEventListener("click",() =>  scrollHome("githubs"));

  const projectButton = document.getElementById("project-button");
  projectButton.addEventListener("click", () => scrollHome("projects"));

  const resumeButton = document.getElementById("resume-button");
  resumeButton.addEventListener("click", ()=> scrollHome("resume"));

  const cell = document.getElementById("contact-cell");
  cell.addEventListener("click", ()=> openLink(cell.getAttribute("href")));

  const contactButton = document.getElementById("contact-button");
  contactButton.addEventListener("click", () => scrollHome("contact"));

  const funButton = document.getElementById("fun-button");
  funButton.addEventListener("click", () => scrollHome("fun"));


}

// function leaveMenu(menu) {
//   const children = menu.children;
//   for (let i = 0; i < children.length; i++) {
//     children[i].style.display = "none";
//   }
// }

function openLink(href) {
  window.open(href, "_blank");
  console.log(href);
}

function scrollHome(location) {
  homeSection = document.getElementById(location);
  homeSection.scrollIntoView({behavior:"smooth"});
}

function showMenu(menu) {
  const children = menu.children;
  for (let i = 0; i < children.length; i++) {
    children[i].style.display = "block";
  }
}

function filterProjects(category) {
  const allProjects = document.querySelectorAll('.project-card');
  allProjects.forEach(project => {
      if (category === 'all' || project.classList.contains(category)) {
          project.style.display = 'block';
      } else {
          project.style.display = 'none';
      }
  });
}