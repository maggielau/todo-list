import {testFn, allTodos, displayTodos} from './todos.js';

//display homepage - show all todos in the content screen

const content = document.getElementById("content");

content.innerText = "Add todos here";

testFn();

console.log(allTodos);

displayTodos();