// General scripts for entire webpage

//development
// const projectFetchURL = 'http://localhost/DT173G_Projekt/rest/api/project.php';
// const workFetchURL = 'http://localhost/DT173G_Projekt/rest/api/work.php';
// const eduFetchURL = 'http://localhost/DT173G_Projekt/rest/api/education.php';

//deployment
const projectFetchURL = 'https://susanne-nilsson.se/src/api/project.php'
const workFetchURL = 'https://susanne-nilsson.se/src/api/work.php'
const eduFetchURL = 'https://susanne-nilsson.se/src/api/education.php'

// Variables
const projectDiv = document.getElementById("projects-section");
const workDiv = document.getElementById("work-div");
const educationDiv = document.getElementById("education-div");
const imgFpath = '../img/'

// Eventlisteners
window.addEventListener('load', getProject);
window.addEventListener('load', getWork);
window.addEventListener('load', getEducation);

// Projects function
function getProject() {
    fetch(projectFetchURL)
    .then(response => response.json())
    .then(res => {
        res.forEach(proj => {
            projectDiv.innerHTML +=
            `
            <div class="project-card">
                <img src="${imgFpath + proj.pImg}" alt="Project image" class="project-image"/>
                <div class="project-info">
                    <h3>${proj.pTitle}</h3>
                    <p>${proj.pDescription}</p>
                    <a href="${proj.pUrl}">Go to Website</a>
                </div>
            </div>
            `
        });
    })
}

// Work function
function getWork() {
    fetch(workFetchURL)
    .then(response => response.json())
    .then(res => {
        res.forEach(work => {
            workDiv.innerHTML +=
            `
            <div class="resume__content grid-05">
                <div class="resume-info">
                    <h3>${work.workTitle}</h3>
                    <h4>${work.employer}</h4>
                    <h5>${work.workStart_date} - ${work.workEnd_date}</h5>
                </div>
                <p class="resume-description">${work.description}</p>
            </div>
            `
        });
    })
}

// Education function
function getEducation() {
    fetch(eduFetchURL)
    .then(response => response.json())
    .then(res => {
        res.forEach(edu => {
            educationDiv.innerHTML +=
            `
            <div class="resume__content grid-05">
                <div class="resume-info">
                    <h3>${edu.eduName}</h3>
                    <h4>${edu.university}</h4>
                    <h5>${edu.start_date} - ${edu.end_date}</h5>
                </div>
                <p class="resume-description">${edu.eDescription}</p>
            </div>
            `
        });
    })
}