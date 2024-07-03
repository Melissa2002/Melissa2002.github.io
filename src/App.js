window.addEventListener('DOMContentLoaded', init);

function init() {

  const homeButton = document.getElementById("home-button");
  homeButton.addEventListener("click",() =>  scrollHome("introduction"));

  const githubButton = document.getElementById("github-button");
  githubButton.addEventListener("click",() =>  scrollHome("githubs"));

  const projectButton = document.getElementById("project-button");
  projectButton.addEventListener("click", () => scrollHome("projects"));

  const resumeButton = document.getElementById("resume-button");
  resumeButton.addEventListener("click", ()=> openLink(resumeButton.getAttribute("href")));

  const projectMenu = document.getElementById("projectmenu");
  projectButton.addEventListener("mouseover", () => showMenu(projectMenu));
  projectButton.addEventListener("mouseleave", () => leaveMenu(projectMenu));

  //const project2 = document.getElementById("project-2");
  //project2.addEventListener("click", () => scrollHome("project2"))

  //const project3 = document.getElementById("project-3");
  //project3.addEventListener("click", () => scrollHome("project3"))
  const email = document.getElementById("contact-email");
  email.addEventListener("click", ()=> openLink(email.getAttribute("href")));

  const cell = document.getElementById("contact-cell");
  cell.addEventListener("click", ()=> openLink(cell.getAttribute("href")));

  const project1 = document.getElementById("project1");
  project1.addEventListener("click", ()=> openLink(project1.getAttribute("href")));

  const project2 = document.getElementById("project2");
  project2.addEventListener("click", ()=> openLink(project2.getAttribute("href")));

  const project3 = document.getElementById("project3");
  project3.addEventListener("click", ()=> openLink(project3.getAttribute("href")));

  const project4 = document.getElementById("project4");
  project4.addEventListener("click", ()=> openLink(project4.getAttribute("href")));

  const contactButton = document.getElementById("contact-button");
  contactButton.addEventListener("click", () => scrollHome("contact"));



}

function leaveMenu(menu) {
  const children = menu.children;
  for (let i = 0; i < children.length; i++) {
    children[i].style.display = "none";
  }
}

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