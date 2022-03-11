//DOM element for main display window "content"
const content = document.getElementById('content');
//ID number for each new todo created
let uniqueID = 0;
//array to store all todos
const allTodos = [];

const testFn = () => {
    console.log("In test function 2");
};

//object cosntructor for todo
const todo = (title, desc, dueDate, priority, project="home", checked=false) => {
    
    //each new todo is assigned a uniqueID for easier edit/removal
    let todoID = uniqueID++;

    return {title, desc, dueDate, priority, project, checked, todoID};
};


//create new todos and add to array
const addTodo = (title, desc, dueDate, priority, project) => {
    const new_todo = todo(title, desc, dueDate, priority, project);
    allTodos.push(new_todo);
};

//create sample todos
addTodo("Do homework", "Finish science report", "Date here", "low");
addTodo("Workout", "10 push ups", "Date here", "low");
addTodo("Walk dog", "pick up the poop", "tomorrow", "high");

//delete todos and remove from array based on the unique ID number passed
const delTodo = (ID) => {
    const delIndex = allTodos.findIndex(todo => {
        return todo.todoID === ID;
    });
    console.log(`Delete ${delIndex}`);
    
}

delTodo(2);


//show all todos in DOM
const displayTodos = () => {
    //clear the DOM element
     content.innerHTML = "";

     //loop through allTodos and create div elements to display
     for (const todo of allTodos) {
         const div = document.createElement('div');
         div.setAttribute("class", "todo");
         div.setAttribute("id", todo.todoID);
         div.innerText = `${todo.title}, ${todo.todoID}`;
         content.appendChild(div);
     }

};


export {testFn, displayTodos, allTodos};
