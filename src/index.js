import {addTodo, allTodos, displayTodos, delTodo} from './todos.js';
import { displaySidebar } from './sidebar.js';

//display homepage - show all todos in the content screen

const content = document.getElementById("content");

content.innerText = "Nothing to do yet, add your tasks!";

addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "Medium");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "Low");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");

displaySidebar();
displayTodos();

