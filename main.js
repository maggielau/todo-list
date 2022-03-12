/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displaySidebar": () => (/* binding */ displaySidebar)
/* harmony export */ });
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");



//Display sidebar elements
const displaySidebar = () => {

    const sidebar = document.getElementById('sidebar');
    

    //Modal
    const modal = document.getElementById("addModal");
    const addButton = document.createElement('button');
    // addButton.id = "addButton";
    addButton.className = "addButton";
    const addPic = new Image();
    addPic.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_0__;
    addPic.setAttribute("width", "60px");
    addButton.appendChild (addPic);
    sidebar.appendChild(addButton);

    //Open modal on click
    addButton.onclick = function() {
        modal.classList.add("is-visible");

    }

    //close modal when clicked outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("is-visible");

        }
    }


}









/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "allTodos": () => (/* binding */ allTodos),
/* harmony export */   "delTodo": () => (/* binding */ delTodo),
/* harmony export */   "displayTodos": () => (/* binding */ displayTodos)
/* harmony export */ });
/* harmony import */ var _images_check_square_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/check-square.svg */ "./src/images/check-square.svg");
/* harmony import */ var _images_square_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/square.svg */ "./src/images/square.svg");
/* harmony import */ var _images_star_low_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/star-low.svg */ "./src/images/star-low.svg");
/* harmony import */ var _images_star_med_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/star-med.svg */ "./src/images/star-med.svg");
/* harmony import */ var _images_star_high_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/star-high.svg */ "./src/images/star-high.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _images_edit_hover_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/edit-hover.svg */ "./src/images/edit-hover.svg");
/* harmony import */ var _images_del_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/del.svg */ "./src/images/del.svg");
/* harmony import */ var _images_del_hover_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/del-hover.svg */ "./src/images/del-hover.svg");












//DOM element for main display window "content"
const content = document.getElementById('content');
//ID number for each new todo created
let uniqueID = 0;
//array to store all todos
const allTodos = [];


//object cosntructor for todo
const todo = (title, desc, dueDate, priority, project="Home", checked=false) => {
    
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
addTodo("Do homework", "Finish science report", "2022-03-31", "Low");
addTodo("Workout", "10 push ups", "2022-04-10", "Low");
addTodo("Walk dog", "pick up the poop", "2022-04-28", "High");

//delete todos and remove from array based on the unique ID number passed
const delTodo = (ID) => {
    const delIndex = findTodoIndex(ID);
    console.log(`Deleted index ${delIndex}`);
    allTodos.splice(delIndex, 1);
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
    unchecked.src = _images_square_svg__WEBPACK_IMPORTED_MODULE_1__;
    unchecked.setAttribute = ("width", "25px");
    const checked = new Image();
    checked.setAttribute = ("width", "25px");
    checked.src = _images_check_square_svg__WEBPACK_IMPORTED_MODULE_0__;

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
        priority.src = _images_star_low_svg__WEBPACK_IMPORTED_MODULE_2__;
    }
    else if (todo.priority === "Medium") {
        priority.src = _images_star_med_svg__WEBPACK_IMPORTED_MODULE_3__;
    }
    else {
        priority.src = _images_star_high_svg__WEBPACK_IMPORTED_MODULE_4__;
    }

    return priority;
}


//Display edit icon
const displayEdit = (todo) => {
    const edit = new Image();
    edit.setAttribute("width", "18px");
    edit.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_5__;

    //highlight pink on mouseover
    edit.onmouseover = () => {edit.src = _images_edit_hover_svg__WEBPACK_IMPORTED_MODULE_6__;}
    edit.onmouseout = () => {edit.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_5__;}


    //add event listener to allow user to edit todo
    edit.addEventListener('click', function (e) {
        e.stopPropagation()
        console.log("Editing this todo");
    });

    return edit;
}

//Display delete icon
const displayDel = (todo, id) => {
    const del = new Image();
    del.setAttribute("width", "18px");
    del.src = _images_del_svg__WEBPACK_IMPORTED_MODULE_7__;

    //highlight pink on mouseover
    del.onmouseover = () => {del.src = _images_del_hover_svg__WEBPACK_IMPORTED_MODULE_8__;}
    del.onmouseout = () => {del.src = _images_del_svg__WEBPACK_IMPORTED_MODULE_7__;}


    //add event listener to allow user to delete todo
    del.addEventListener('click', function (e) {
        e.stopPropagation()
        delTodo(id);
        displayTodos();
    });

    return del;
}



//show all todos in DOM
const displayTodos = () => {
    //clear the DOM element
     content.innerHTML = "";

     //loop through allTodos and create div elements to display
     for (const todo of allTodos) {
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

        //Display icons
        const icons = document.createElement('div')
        icons.setAttribute("class", "todoIcons");
        icons.appendChild(displayPriority(todo));
        icons.appendChild(displayEdit(todo));
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

};





/***/ }),

/***/ "./src/images/check-square.svg":
/*!*************************************!*\
  !*** ./src/images/check-square.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13aee586d2c05861a152.svg";

/***/ }),

/***/ "./src/images/del-hover.svg":
/*!**********************************!*\
  !*** ./src/images/del-hover.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36b7371e9aa5b51a09a8.svg";

/***/ }),

/***/ "./src/images/del.svg":
/*!****************************!*\
  !*** ./src/images/del.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "058ded4e19019f6986ce.svg";

/***/ }),

/***/ "./src/images/edit-hover.svg":
/*!***********************************!*\
  !*** ./src/images/edit-hover.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16ee18680ebd0cb543a4.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad84ceaa5715062bf597.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f34bdd4fbb7d988839f0.svg";

/***/ }),

/***/ "./src/images/square.svg":
/*!*******************************!*\
  !*** ./src/images/square.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9f7a73cc813da509141.svg";

/***/ }),

/***/ "./src/images/star-high.svg":
/*!**********************************!*\
  !*** ./src/images/star-high.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed310422205321ae0cd1.svg";

/***/ }),

/***/ "./src/images/star-low.svg":
/*!*********************************!*\
  !*** ./src/images/star-low.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89072e912cbf402c28fa.svg";

/***/ }),

/***/ "./src/images/star-med.svg":
/*!*********************************!*\
  !*** ./src/images/star-med.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3385aa86436f3586a300.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");



//display homepage - show all todos in the content screen

const content = document.getElementById("content");

content.innerText = "Nothing to do yet, add your tasks!";

(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "Medium");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "Low");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)("Walk dog", "pick up the poop", "2022-04-28", "High");

(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.displaySidebar)();
(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2ZvRTtBQUN0Qjs7QUFFOUM7O0FBRUE7O0FBRUE7O0FBRUEsa0RBQU87QUFDUCxrREFBTztBQUNQLGtEQUFPO0FBQ1Asa0RBQU87QUFDUCxrREFBTztBQUNQLGtEQUFPO0FBQ1Asa0RBQU87QUFDUCxrREFBTztBQUNQLGtEQUFPO0FBQ1Asa0RBQU87QUFDUCxrREFBTztBQUNQLGtEQUFPO0FBQ1Asa0RBQU87O0FBRVAsMkRBQWM7QUFDZCx1REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGRJbWcgZnJvbSAnLi9pbWFnZXMvcGx1cy5zdmcnO1xuXG5cbi8vRGlzcGxheSBzaWRlYmFyIGVsZW1lbnRzXG5jb25zdCBkaXNwbGF5U2lkZWJhciA9ICgpID0+IHtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xuICAgIFxuXG4gICAgLy9Nb2RhbFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRNb2RhbFwiKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyBhZGRCdXR0b24uaWQgPSBcImFkZEJ1dHRvblwiO1xuICAgIGFkZEJ1dHRvbi5jbGFzc05hbWUgPSBcImFkZEJ1dHRvblwiO1xuICAgIGNvbnN0IGFkZFBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGFkZFBpYy5zcmMgPSBhZGRJbWc7XG4gICAgYWRkUGljLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiNjBweFwiKTtcbiAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQgKGFkZFBpYyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgLy9PcGVuIG1vZGFsIG9uIGNsaWNrXG4gICAgYWRkQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG5cbiAgICB9XG5cbiAgICAvL2Nsb3NlIG1vZGFsIHdoZW4gY2xpY2tlZCBvdXRzaWRlXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtdmlzaWJsZVwiKTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHtkaXNwbGF5U2lkZWJhcn07XG5cblxuXG5cblxuIiwiaW1wb3J0IGNoZWNrZWRTcXVhcmVJbWcgZnJvbSAnLi9pbWFnZXMvY2hlY2stc3F1YXJlLnN2ZydcbmltcG9ydCBzcXVhcmVJbWcgZnJvbSAnLi9pbWFnZXMvc3F1YXJlLnN2Zyc7XG5pbXBvcnQgbG93SW1nIGZyb20gJy4vaW1hZ2VzL3N0YXItbG93LnN2Zyc7XG5pbXBvcnQgbWVkSW1nIGZyb20gJy4vaW1hZ2VzL3N0YXItbWVkLnN2Zyc7XG5pbXBvcnQgaGlnaEltZyBmcm9tICcuL2ltYWdlcy9zdGFyLWhpZ2guc3ZnJztcbmltcG9ydCBlZGl0SW1nIGZyb20gJy4vaW1hZ2VzL2VkaXQuc3ZnJztcbmltcG9ydCBlZGl0SG92ZXJJbWcgZnJvbSAnLi9pbWFnZXMvZWRpdC1ob3Zlci5zdmcnO1xuaW1wb3J0IGRlbEltZyBmcm9tICcuL2ltYWdlcy9kZWwuc3ZnJztcbmltcG9ydCBkZWxIb3ZlckltZyBmcm9tICcuL2ltYWdlcy9kZWwtaG92ZXIuc3ZnJztcblxuXG5cbi8vRE9NIGVsZW1lbnQgZm9yIG1haW4gZGlzcGxheSB3aW5kb3cgXCJjb250ZW50XCJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuLy9JRCBudW1iZXIgZm9yIGVhY2ggbmV3IHRvZG8gY3JlYXRlZFxubGV0IHVuaXF1ZUlEID0gMDtcbi8vYXJyYXkgdG8gc3RvcmUgYWxsIHRvZG9zXG5jb25zdCBhbGxUb2RvcyA9IFtdO1xuXG5cbi8vb2JqZWN0IGNvc250cnVjdG9yIGZvciB0b2RvXG5jb25zdCB0b2RvID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdD1cIkhvbWVcIiwgY2hlY2tlZD1mYWxzZSkgPT4ge1xuICAgIFxuICAgIC8vZWFjaCBuZXcgdG9kbyBpcyBhc3NpZ25lZCBhIHVuaXF1ZUlEIGZvciBlYXNpZXIgZWRpdC9yZW1vdmFsXG4gICAgbGV0IHRvZG9JRCA9IHVuaXF1ZUlEKys7XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgY2hlY2tlZCwgdG9kb0lEfTtcbn07XG5cblxuLy9jcmVhdGUgbmV3IHRvZG9zIGFuZCBhZGQgdG8gYXJyYXlcbmNvbnN0IGFkZFRvZG8gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbmV3X3RvZG8gPSB0b2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgYWxsVG9kb3MucHVzaChuZXdfdG9kbyk7XG59O1xuXG4vL2NyZWF0ZSBzYW1wbGUgdG9kb3NcbmFkZFRvZG8oXCJEbyBob21ld29ya1wiLCBcIkZpbmlzaCBzY2llbmNlIHJlcG9ydFwiLCBcIjIwMjItMDMtMzFcIiwgXCJMb3dcIik7XG5hZGRUb2RvKFwiV29ya291dFwiLCBcIjEwIHB1c2ggdXBzXCIsIFwiMjAyMi0wNC0xMFwiLCBcIkxvd1wiKTtcbmFkZFRvZG8oXCJXYWxrIGRvZ1wiLCBcInBpY2sgdXAgdGhlIHBvb3BcIiwgXCIyMDIyLTA0LTI4XCIsIFwiSGlnaFwiKTtcblxuLy9kZWxldGUgdG9kb3MgYW5kIHJlbW92ZSBmcm9tIGFycmF5IGJhc2VkIG9uIHRoZSB1bmlxdWUgSUQgbnVtYmVyIHBhc3NlZFxuY29uc3QgZGVsVG9kbyA9IChJRCkgPT4ge1xuICAgIGNvbnN0IGRlbEluZGV4ID0gZmluZFRvZG9JbmRleChJRCk7XG4gICAgY29uc29sZS5sb2coYERlbGV0ZWQgaW5kZXggJHtkZWxJbmRleH1gKTtcbiAgICBhbGxUb2Rvcy5zcGxpY2UoZGVsSW5kZXgsIDEpO1xufVxuXG4vL2ZpbmRzIHRoZSBpbmRleCBsb2NhdGlvbiBvZiB0aGUgdG9kbyBiYXNlZCBvbiB1bmlxdWUgSUQgbnVtYmVyIHBhc3NlZFxuY29uc3QgZmluZFRvZG9JbmRleCA9IChJRCkgPT4ge1xuICAgIGNvbnN0IHRvZG9JbmRleCA9IGFsbFRvZG9zLmZpbmRJbmRleCh0b2RvID0+IHtcbiAgICAgICAgcmV0dXJuIHRvZG8udG9kb0lEID09PSBJRDtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9kb0luZGV4O1xufVxuXG4vL2Rpc3BsYXkgY2hlY2tlZC91bmNoZWNrZWQgYm94XG5jb25zdCBkaXNwbGF5Q2hlY2tib3ggPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tib3guY2xhc3NOYW1lID0gXCJjaGVja2JveFwiXG4gICAgY29uc3QgdW5jaGVja2VkID0gbmV3IEltYWdlKCk7XG4gICAgdW5jaGVja2VkLnNyYyA9IHNxdWFyZUltZztcbiAgICB1bmNoZWNrZWQuc2V0QXR0cmlidXRlID0gKFwid2lkdGhcIiwgXCIyNXB4XCIpO1xuICAgIGNvbnN0IGNoZWNrZWQgPSBuZXcgSW1hZ2UoKTtcbiAgICBjaGVja2VkLnNldEF0dHJpYnV0ZSA9IChcIndpZHRoXCIsIFwiMjVweFwiKTtcbiAgICBjaGVja2VkLnNyYyA9IGNoZWNrZWRTcXVhcmVJbWc7XG5cbiAgICAvL0Rpc3BsYXkgaWYgY2hlY2tlZCBvciBub3QgY2hlY2tlZFxuICAgIGlmICh0b2RvLmNoZWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgY2hlY2tib3guYXBwZW5kQ2hpbGQodW5jaGVja2VkKTtcbiAgICAgICAgY2hlY2tib3guaWQgPSBcInVuY2hlY2tlZFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY2hlY2tlZCk7XG4gICAgICAgIGNoZWNrYm94LmlkID0gXCJjaGVja2VkXCI7XG4gICAgfVxuXG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gYWxsb3cgdXNlciB0byBjaGVjayBhbmQgdW5jaGVja1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBpZiAodG9kby5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0b2RvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kby5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheVRvZG9zKCk7XG4gICAgfSk7XG4gICAgXG5cbiAgICByZXR1cm4gY2hlY2tib3g7XG59XG5cbi8vZGlzcGxheSBjb2xvdXJlZCBzdGFyIGljb25zIGRlcGVuZGluZyBvbiBhc3NpZ25lZCBwcmlvcml0eVxuY29uc3QgZGlzcGxheVByaW9yaXR5ID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBwcmlvcml0eSA9IG5ldyBJbWFnZSgpO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMThweFwiKTtcbiAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gXCJMb3dcIikge1xuICAgICAgICBwcmlvcml0eS5zcmMgPSBsb3dJbWc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgcHJpb3JpdHkuc3JjID0gbWVkSW1nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHkuc3JjID0gaGlnaEltZztcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpb3JpdHk7XG59XG5cblxuLy9EaXNwbGF5IGVkaXQgaWNvblxuY29uc3QgZGlzcGxheUVkaXQgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGVkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgICBlZGl0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMThweFwiKTtcbiAgICBlZGl0LnNyYyA9IGVkaXRJbWc7XG5cbiAgICAvL2hpZ2hsaWdodCBwaW5rIG9uIG1vdXNlb3ZlclxuICAgIGVkaXQub25tb3VzZW92ZXIgPSAoKSA9PiB7ZWRpdC5zcmMgPSBlZGl0SG92ZXJJbWc7fVxuICAgIGVkaXQub25tb3VzZW91dCA9ICgpID0+IHtlZGl0LnNyYyA9IGVkaXRJbWc7fVxuXG5cbiAgICAvL2FkZCBldmVudCBsaXN0ZW5lciB0byBhbGxvdyB1c2VyIHRvIGVkaXQgdG9kb1xuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWRpdGluZyB0aGlzIHRvZG9cIik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWRpdDtcbn1cblxuLy9EaXNwbGF5IGRlbGV0ZSBpY29uXG5jb25zdCBkaXNwbGF5RGVsID0gKHRvZG8sIGlkKSA9PiB7XG4gICAgY29uc3QgZGVsID0gbmV3IEltYWdlKCk7XG4gICAgZGVsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMThweFwiKTtcbiAgICBkZWwuc3JjID0gZGVsSW1nO1xuXG4gICAgLy9oaWdobGlnaHQgcGluayBvbiBtb3VzZW92ZXJcbiAgICBkZWwub25tb3VzZW92ZXIgPSAoKSA9PiB7ZGVsLnNyYyA9IGRlbEhvdmVySW1nO31cbiAgICBkZWwub25tb3VzZW91dCA9ICgpID0+IHtkZWwuc3JjID0gZGVsSW1nO31cblxuXG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gYWxsb3cgdXNlciB0byBkZWxldGUgdG9kb1xuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZGVsVG9kbyhpZCk7XG4gICAgICAgIGRpc3BsYXlUb2RvcygpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlbDtcbn1cblxuXG5cbi8vc2hvdyBhbGwgdG9kb3MgaW4gRE9NXG5jb25zdCBkaXNwbGF5VG9kb3MgPSAoKSA9PiB7XG4gICAgLy9jbGVhciB0aGUgRE9NIGVsZW1lbnRcbiAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgIC8vbG9vcCB0aHJvdWdoIGFsbFRvZG9zIGFuZCBjcmVhdGUgZGl2IGVsZW1lbnRzIHRvIGRpc3BsYXlcbiAgICAgZm9yIChjb25zdCB0b2RvIG9mIGFsbFRvZG9zKSB7XG4gICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG9cIik7XG4gICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgdG9kby50b2RvSUQpO1xuXG4gICAgICAgIC8vdG9kbyBtYWluIGluZm8gZGlzcGxheVxuICAgICAgICBjb25zdCB0b2RvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvSW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG9JbmZvXCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG9UaXRsZVwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgdG9kby5jaGVja2VkKTtcblxuICAgICAgICAvL0Rpc3BsYXkgY2hlY2tib3hcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQoZGlzcGxheUNoZWNrYm94KHRvZG8pKTsgICAgICAgIFxuXG4gICAgICAgIHRpdGxlLmFwcGVuZCh0b2RvLnRpdGxlKTtcblxuICAgICAgICAvL0Rpc3BsYXkgaWNvbnNcbiAgICAgICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpY29ucy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG9JY29uc1wiKTtcbiAgICAgICAgaWNvbnMuYXBwZW5kQ2hpbGQoZGlzcGxheVByaW9yaXR5KHRvZG8pKTtcbiAgICAgICAgaWNvbnMuYXBwZW5kQ2hpbGQoZGlzcGxheUVkaXQodG9kbykpO1xuICAgICAgICBpY29ucy5hcHBlbmRDaGlsZChkaXNwbGF5RGVsKHRvZG8sIHRvZG8udG9kb0lEKSk7XG5cblxuICAgICAgICB0b2RvSW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRvZG9JbmZvLmFwcGVuZENoaWxkKGljb25zKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRvZG9JbmZvKTtcblxuXG5cbiAgICAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVyLCB3aGVuIHRvZG8gaXMgY2xpY2tlZCwgZGlzcGxheSBkZXRhaWxzXG4gICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZmluZFRvZG9JbmRleChwYXJzZUludCh0aGlzLmlkKSk7XG4gICAgICAgICAgICAvL3RvZG8gaGFzIGJlZW4gZXhwYW5kZWQgYWxyZWFkeSwgY2xvc2UgaXQgYnkgZGVsZXRpbmdcbiAgICAgICAgICAgIGlmIChkaXYuY2hpbGROb2Rlcy5sZW5ndGg+MSkge1xuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdG9kbyBpcyBjbG9zZWQsIGV4cGFuZCB3aXRoIGRldGFpbHNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBgPGI+RGV0YWlsczo8L2I+ICR7YWxsVG9kb3NbaW5kZXhdLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjxicj48Yj5EdWUgRGF0ZTo8L2I+ICR7YWxsVG9kb3NbaW5kZXhdLmR1ZURhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjxiPlByaW9yaXR5OjwvYj4gJHthbGxUb2Rvc1tpbmRleF0ucHJpb3JpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjxiPlByb2plY3Q6PC9iPiAke2FsbFRvZG9zW2luZGV4XS5wcm9qZWN0fWA7XG5cbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KTtcblxuXG4gICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG59O1xuXG5cbmV4cG9ydCB7ZGlzcGxheVRvZG9zLCBhZGRUb2RvLCBkZWxUb2RvLCBhbGxUb2Rvc307XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge2FkZFRvZG8sIGFsbFRvZG9zLCBkaXNwbGF5VG9kb3MsIGRlbFRvZG99IGZyb20gJy4vdG9kb3MuanMnO1xuaW1wb3J0IHsgZGlzcGxheVNpZGViYXIgfSBmcm9tICcuL3NpZGViYXIuanMnO1xuXG4vL2Rpc3BsYXkgaG9tZXBhZ2UgLSBzaG93IGFsbCB0b2RvcyBpbiB0aGUgY29udGVudCBzY3JlZW5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29udGVudC5pbm5lclRleHQgPSBcIk5vdGhpbmcgdG8gZG8geWV0LCBhZGQgeW91ciB0YXNrcyFcIjtcblxuYWRkVG9kbyhcIldhbGsgZG9nXCIsIFwicGljayB1cCB0aGUgcG9vcFwiLCBcIjIwMjItMDQtMjhcIiwgXCJIaWdoXCIpO1xuYWRkVG9kbyhcIldhbGsgZG9nXCIsIFwicGljayB1cCB0aGUgcG9vcFwiLCBcIjIwMjItMDQtMjhcIiwgXCJIaWdoXCIpO1xuYWRkVG9kbyhcIldhbGsgZG9nXCIsIFwicGljayB1cCB0aGUgcG9vcFwiLCBcIjIwMjItMDQtMjhcIiwgXCJNZWRpdW1cIik7XG5hZGRUb2RvKFwiV2FsayBkb2dcIiwgXCJwaWNrIHVwIHRoZSBwb29wXCIsIFwiMjAyMi0wNC0yOFwiLCBcIkhpZ2hcIik7XG5hZGRUb2RvKFwiV2FsayBkb2dcIiwgXCJwaWNrIHVwIHRoZSBwb29wXCIsIFwiMjAyMi0wNC0yOFwiLCBcIkxvd1wiKTtcbmFkZFRvZG8oXCJXYWxrIGRvZ1wiLCBcInBpY2sgdXAgdGhlIHBvb3BcIiwgXCIyMDIyLTA0LTI4XCIsIFwiSGlnaFwiKTtcbmFkZFRvZG8oXCJXYWxrIGRvZ1wiLCBcInBpY2sgdXAgdGhlIHBvb3BcIiwgXCIyMDIyLTA0LTI4XCIsIFwiSGlnaFwiKTtcbmFkZFRvZG8oXCJXYWxrIGRvZ1wiLCBcInBpY2sgdXAgdGhlIHBvb3BcIiwgXCIyMDIyLTA0LTI4XCIsIFwiSGlnaFwiKTtcbmFkZFRvZG8oXCJXYWxrIGRvZ1wiLCBcInBpY2sgdXAgdGhlIHBvb3BcIiwgXCIyMDIyLTA0LTI4XCIsIFwiSGlnaFwiKTtcbmFkZFRvZG8oXCJXYWxrIGRvZ1wiLCBcInBpY2sgdXAgdGhlIHBvb3BcIiwgXCIyMDIyLTA0LTI4XCIsIFwiSGlnaFwiKTtcbmFkZFRvZG8oXCJXYWxrIGRvZ1wiLCBcInBpY2sgdXAgdGhlIHBvb3BcIiwgXCIyMDIyLTA0LTI4XCIsIFwiSGlnaFwiKTtcbmFkZFRvZG8oXCJXYWxrIGRvZ1wiLCBcInBpY2sgdXAgdGhlIHBvb3BcIiwgXCIyMDIyLTA0LTI4XCIsIFwiSGlnaFwiKTtcbmFkZFRvZG8oXCJXYWxrIGRvZ1wiLCBcInBpY2sgdXAgdGhlIHBvb3BcIiwgXCIyMDIyLTA0LTI4XCIsIFwiSGlnaFwiKTtcblxuZGlzcGxheVNpZGViYXIoKTtcbmRpc3BsYXlUb2RvcygpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=