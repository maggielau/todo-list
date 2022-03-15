import checkedSquareImg from './images/check-square.svg'
import squareImg from './images/square.svg';
import lowImg from './images/star-low.svg';
import medImg from './images/star-med.svg';
import highImg from './images/star-high.svg';
import editImg from './images/edit.svg';
import editHoverImg from './images/edit-hover.svg';
import delImg from './images/del.svg';
import delHoverImg from './images/del-hover.svg';
import { format, compareAsc } from 'date-fns';
import { openModal, readForm, openEditForm, readEditForm } from './sidebar';



//DOM element for main display window "content"
const content = document.getElementById('content');
//ID number for each new todo created
let uniqueID = 0;
//array to store all todos
const allTodos = [];


//object cosntructor for todo
const todo = (title, desc, dueDate, priority, project="", checked=false) => {
    
    //each new todo is assigned a uniqueID for easier edit/removal
    let todoID = uniqueID++;

    let year = parseInt(dueDate.substring(0,4));
    let month = parseInt(dueDate.substring(5,7))-1;
    let day = parseInt(dueDate.substring(8));

    return {title, desc, dueDate, year, month, day, priority, project, checked, todoID};
};


//create new todos and add to array
const addTodo = (title, desc, dueDate, priority, project) => {
    const new_todo = todo(title, desc, dueDate, priority, project);
    allTodos.push(new_todo);

    //sort the todos array by date in descending 
    allTodos.sort(dynamicSort("dueDate"));

};

//create new todos and add to array
const editTodo = (id, titleEdit, descEdit, dueDateEdit, priorityEdit, projectEdit) => {

    allTodos[id].title = titleEdit;
    allTodos[id].desc = descEdit;
    allTodos[id].dueDate = dueDateEdit;
    allTodos[id].priority = priorityEdit;
    allTodos[id].project = projectEdit;


    //sort the todos array by date in descending 
    allTodos.sort(dynamicSort("dueDate"));

};

//create sample todos
addTodo("Do homework", "Finish science report", "2022-03-31", "Low");
addTodo("Workout", "10 push ups", "2022-01-10", "Low");
addTodo("Walk dog", "pick up the poop", "2022-02-26", "High");

//delete todos and remove from array based on the unique ID number passed
const delTodo = (ID) => {
    const delIndex = findTodoIndex(ID);
    allTodos.splice(delIndex, 1);
}

//function to sort objects by key value
function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

//function to find and return all unique values of project names
const findProjects = () => {
    const uniqueProjects = new Set()
    for (const todo of allTodos) {
        uniqueProjects.add(todo.project);
    }
    return uniqueProjects;
}


//finds the index location of the todo based on unique ID number passed
const findTodoIndex = (ID) => {
    const todoIndex = allTodos.findIndex(todo => {
        return todo.todoID === ID;
    });
    return todoIndex;
}

//display checked/unchecked box
const displayCheckbox = (todo) => {
    const checkbox = document.createElement('div');
    checkbox.className = "checkbox"
    const unchecked = new Image();
    unchecked.src = squareImg;
    unchecked.setAttribute = ("width", "25px");
    const checked = new Image();
    checked.setAttribute = ("width", "25px");
    checked.src = checkedSquareImg;

    //Display if checked or not checked
    if (todo.checked == false) {
        checkbox.appendChild(unchecked);
        checkbox.id = "unchecked";
    }
    else {
        checkbox.appendChild(checked);
        checkbox.id = "checked";
    }

    //add event listener to allow user to check and uncheck
    checkbox.addEventListener('click', function (e) {
        e.stopPropagation()
        if (todo.checked == false) {
            todo.checked = true;
        }
        else {
            todo.checked = false;
        }
        displayTodos();
    });
    

    return checkbox;
}

//display coloured star icons depending on assigned priority
const displayPriority = (todo) => {
    const priority = new Image();
    priority.setAttribute("width", "18px");
    if (todo.priority === "Low") {
        priority.src = lowImg;
    }
    else if (todo.priority === "Medium") {
        priority.src = medImg;
    }
    else {
        priority.src = highImg;
    }

    return priority;
}


//Display edit icon
const displayEdit = (id) => {
    const edit = new Image();
    edit.setAttribute("width", "18px");
    edit.src = editImg;

    //highlight pink on mouseover
    edit.onmouseover = () => {edit.src = editHoverImg;}
    edit.onmouseout = () => {edit.src = editImg;}


    //add event listener to allow user to edit todo
    edit.addEventListener('click', function (e) {
        let actualID = findTodoIndex(id);
        e.stopPropagation()
        openModal();
        openEditForm(actualID);


    });

    return edit;
}

//Display delete icon
const displayDel = (todo, id) => {
    const del = new Image();
    del.setAttribute("width", "18px");
    del.src = delImg;

    //highlight pink on mouseover
    del.onmouseover = () => {del.src = delHoverImg;}
    del.onmouseout = () => {del.src = delImg;}


    //add event listener to allow user to delete todo
    del.addEventListener('click', function (e) {
        e.stopPropagation()
        delTodo(id);
        displayTodos();
    });

    return del;
}



//show all todos in DOM
const displayTodos = (filter="") => {
    //clear the DOM element
     content.innerHTML = "";

     //loop through allTodos and create div elements to display
     for (const todo of allTodos) {
         //display if todo matches the filter
         if (todo.project === filter || filter === "") {
            const div = document.createElement('div');
            div.setAttribute("class", "todo");
            div.setAttribute("id", todo.todoID);

            //todo main info display
            const todoInfo = document.createElement('div');
            todoInfo.setAttribute("class", "todoInfo");
            const title = document.createElement('div');
            title.setAttribute("class", "todoTitle");
            title.setAttribute("id", todo.checked);

            //Display checkbox
            title.appendChild(displayCheckbox(todo));        

            title.append(todo.title);

            //Display date and icons
            const icons = document.createElement('div')
            icons.setAttribute("class", "todoIcons");
            icons.id = todo.todoID;
            icons.append(format(new Date(todo.year, todo.month, todo.day), 'MMM-dd'));
            icons.appendChild(displayPriority(todo));
            icons.appendChild(displayEdit(todo.todoID));
            icons.appendChild(displayDel(todo, todo.todoID));





            todoInfo.appendChild(title);
            todoInfo.appendChild(icons);
            div.appendChild(todoInfo);



            //add event listener, when todo is clicked, display details
            div.addEventListener('click', function (e) {
                let index = findTodoIndex(parseInt(this.id));
                //todo has been expanded already, close it by deleting
                if (div.childNodes.length>1) {
                    div.removeChild(div.lastChild);
                }
                //todo is closed, expand with details
                else {
                    const p = document.createElement('p');
                    p.innerHTML = `<b>Details:</b> ${allTodos[index].desc}
                                <br><br><b>Due Date:</b> ${allTodos[index].dueDate}
                                <br><b>Priority:</b> ${allTodos[index].priority}
                                <br><b>Project:</b> ${allTodos[index].project}`;

                    div.appendChild(p);
                }
            });


            content.appendChild(div);
        }
    }

};


export {displayTodos, addTodo, editTodo, delTodo, findProjects, allTodos};
