import addImg from './images/plus.svg';
import {findProjects, addTodo, editTodo, displayTodos, allTodos} from './todos.js';

//Modal
const modal = document.getElementById("addModal");
const modalbutton = document.getElementById('modalButton');
const editbutton = document.getElementById('editButton');
let currentlyEditingID;
modalbutton.addEventListener('click', function () {
    readForm();
});
editbutton.addEventListener('click', function () {
    readEditForm();
});


//Form
const form = document.getElementById('todoForm');
const formError = document.getElementById('formError');


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

    homeLink.addEventListener('click', function () {
        displayTodos();
    });

    //Display links to Home view and different projects
    const projectLinks = document.createElement('div');
    projectLinks.className = "projectLinks";
    let allProjects = findProjects();
    for (const project of allProjects) {
        const projectLink = document.createElement('div');
        projectLink.className = "projectLink";
        projectLink.id = project;
        projectLink.innerText = project;
        projectLinks.appendChild(projectLink);

        projectLink.addEventListener('click', function () {
            displayTodos(project);
        });
    }
    sidebar.appendChild(projectLinks);


    const addButton = document.createElement('button');
    addButton.className = "addButton";
    const addPic = new Image();
    addPic.src = addImg;
    addPic.setAttribute("width", "60px");
    addButton.appendChild (addPic);
    sidebar.appendChild(addButton);

    //Open modal on click and update project list
    addButton.onclick = function() {
        openModal();
        updateProjectList();

    }

    //close modal when clicked X
    const closeButton = document.getElementById("closeModal")
    closeButton.onclick = function(event) {
            modal.classList.remove("is-visible");
            form.reset();
            editbutton.classList.remove("is-visible");
            modalbutton.classList.add("is-visible");
    }

    modalbutton.classList.add("is-visible");



}

const openModal = () => {
    modal.classList.add("is-visible");

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

    addTodo(title, desc, date, priority, project);
    displayTodos(project);
    displaySidebar();
    form.reset();
    formError.innerHTML = "";

}

//pre-fill form for editing todos
const openEditForm = (id) => {


    let LowRadio = document.getElementById('LowRadio'); 
    let MediumRadio = document.getElementById('MediumRadio'); 
    let HighRadio = document.getElementById('HighRadio'); 


    //pre-fill form with existing todo values
    form.elements[0].value = allTodos[id].title;
    form.elements[1].value = allTodos[id].desc;
    form.elements[2].value = allTodos[id].dueDate;
    form.elements[3].value = allTodos[id].project;

    if (allTodos[id].priority === "Medium") {
        LowRadio.checked = false;
        MediumRadio.checked = true;
    }
    else if (allTodos[id].priority === "High") {
        LowRadio.checked = false;
        HighRadio.checked = true;
    }
    else {
        LowRadio.checked = true;
    }

    editbutton.classList.add("is-visible");
    modalbutton.classList.remove("is-visible");

    currentlyEditingID = id;

}

//read form to create new todo
const readEditForm = () => {

    let titleInput = form.elements[0].value;
    let descInput = form.elements[1].value;
    let dateInput = form.elements[2].value;
    let projectInput = form.elements[3].value;
    let priorityInput = document.querySelector('input[name="priority"]:checked').value;

    //Error if not all required fields are submitted
    if (titleInput == "" || descInput == "" || dateInput == "" || priorityInput == "") {
        formError.innerText="Please fill all required fields!";
        return;
    }

    editTodo(currentlyEditingID, titleInput, descInput, dateInput, priorityInput, projectInput);
    displayTodos();
    displaySidebar();
    form.reset();
    formError.innerHTML = "";

    //return modal buttons back to default function
    modalbutton.classList.add("is-visible");
    editbutton.classList.remove("is-visible");


}

export {displaySidebar, readForm, openEditForm, readEditForm, openModal};





