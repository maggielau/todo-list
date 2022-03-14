import {addTodo, allTodos, displayTodos, delTodo, findProjects} from './todos.js';
import { displaySidebar, readForm } from './sidebar.js';

//display homepage - show all todos in the content screen

const content = document.getElementById("content");

content.innerText = "Nothing to do yet, add your tasks!";

addTodo("Walk dog", "pick up the poop", "2022-04-28", "High", "Project 2");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High", "Project 3");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "Medium", "Project 2");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High", "Weeee");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "Low");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");

let modalbutton = document.getElementById('modalButton');

modalbutton.addEventListener('click', function () {
    readForm();
});

displaySidebar();
displayTodos();


