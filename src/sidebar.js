import addImg from './images/plus.svg';
import {findProjects, addTodo, displayTodos} from './todos.js';



//Display sidebar elements
const displaySidebar = () => {

    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML="";

    //Display link for default home view
    const homeLink = document.createElement('div');
    homeLink.className = "projectLink";
    homeLink.id = "home";
    homeLink.innerText = "Home";
    sidebar.appendChild(homeLink);

    //Display links to Home view and different projects
    const projectLinks = document.createElement('div');
    projectLinks.className = "projectLinks";
    let allProjects = findProjects();
    for (const project of allProjects) {
        const projectLink = document.createElement('div');
        projectLink.className = "projectLink";
        projectLink.innerText = project;
        projectLinks.appendChild(projectLink);
    }
    sidebar.appendChild(projectLinks);

    //Modal
    const modal = document.getElementById("addModal");
    const addButton = document.createElement('button');
    addButton.className = "addButton";
    const addPic = new Image();
    addPic.src = addImg;
    addPic.setAttribute("width", "60px");
    addButton.appendChild (addPic);
    sidebar.appendChild(addButton);

    //Open modal on click and update project list
    addButton.onclick = function() {
        modal.classList.add("is-visible");
        updateProjectList();

    }

    //close modal when clicked outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("is-visible");

        }
    }


}

//Update list of projects shown in form
const updateProjectList = () => {
    let allProjects = findProjects();
    let projectList = document.getElementById('projectList');
    projectList.innerHTML="";
    for (const project of allProjects) {
        const projectOption = document.createElement('option');
        projectOption.innerText = project;
        projectList.appendChild(projectOption);
    }
}

//read form to create new todo
const readForm = () => {

    let form = document.getElementById('todoForm');
    let formError = document.getElementById('formError');

    let title = form.elements[0].value;
    let desc = form.elements[1].value;
    let date = form.elements[2].value;
    let project = form.elements[3].value;
    let priority = document.querySelector('input[name="priority"]:checked').value;

    //Error if not all required fields are submitted
    if (title == "" || desc == "" || date == "" || priority == "") {
        formError.innerText="Please fill all required fields!";
        return;
    }
    console.log(title, desc, date, project, priority);
    console.log(project);

    addTodo(title, desc, date, priority, project);
    displayTodos();
    displaySidebar();
    form.reset();
    formError.innerHTML = "";

}

export {displaySidebar, readForm};





