/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTodos": () => (/* binding */ allTodos),
/* harmony export */   "displayTodos": () => (/* binding */ displayTodos),
/* harmony export */   "testFn": () => (/* binding */ testFn)
/* harmony export */ });
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");


//display homepage - show all todos in the content screen

const content = document.getElementById("content");

content.innerText = "Add todos here";

(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.testFn)();

console.log(_todos_js__WEBPACK_IMPORTED_MODULE_0__.allTodos);

(0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwwQkFBMEIsU0FBUztBQUNuQztBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVcsSUFBSSxZQUFZO0FBQ3ZEO0FBQ0E7O0FBRUE7OztBQUd3Qzs7Ozs7OztVQzdEeEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wRDs7QUFFMUQ7O0FBRUE7O0FBRUE7O0FBRUEsaURBQU07O0FBRU4sWUFBWSwrQ0FBUTs7QUFFcEIsdURBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9ET00gZWxlbWVudCBmb3IgbWFpbiBkaXNwbGF5IHdpbmRvdyBcImNvbnRlbnRcIlxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4vL0lEIG51bWJlciBmb3IgZWFjaCBuZXcgdG9kbyBjcmVhdGVkXG5sZXQgdW5pcXVlSUQgPSAwO1xuLy9hcnJheSB0byBzdG9yZSBhbGwgdG9kb3NcbmNvbnN0IGFsbFRvZG9zID0gW107XG5cbmNvbnN0IHRlc3RGbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkluIHRlc3QgZnVuY3Rpb24gMlwiKTtcbn07XG5cbi8vb2JqZWN0IGNvc250cnVjdG9yIGZvciB0b2RvXG5jb25zdCB0b2RvID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdD1cImhvbWVcIiwgY2hlY2tlZD1mYWxzZSkgPT4ge1xuICAgIFxuICAgIC8vZWFjaCBuZXcgdG9kbyBpcyBhc3NpZ25lZCBhIHVuaXF1ZUlEIGZvciBlYXNpZXIgZWRpdC9yZW1vdmFsXG4gICAgbGV0IHRvZG9JRCA9IHVuaXF1ZUlEKys7XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgY2hlY2tlZCwgdG9kb0lEfTtcbn07XG5cblxuLy9jcmVhdGUgbmV3IHRvZG9zIGFuZCBhZGQgdG8gYXJyYXlcbmNvbnN0IGFkZFRvZG8gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbmV3X3RvZG8gPSB0b2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgYWxsVG9kb3MucHVzaChuZXdfdG9kbyk7XG59O1xuXG4vL2NyZWF0ZSBzYW1wbGUgdG9kb3NcbmFkZFRvZG8oXCJEbyBob21ld29ya1wiLCBcIkZpbmlzaCBzY2llbmNlIHJlcG9ydFwiLCBcIkRhdGUgaGVyZVwiLCBcImxvd1wiKTtcbmFkZFRvZG8oXCJXb3Jrb3V0XCIsIFwiMTAgcHVzaCB1cHNcIiwgXCJEYXRlIGhlcmVcIiwgXCJsb3dcIik7XG5hZGRUb2RvKFwiV2FsayBkb2dcIiwgXCJwaWNrIHVwIHRoZSBwb29wXCIsIFwidG9tb3Jyb3dcIiwgXCJoaWdoXCIpO1xuXG4vL2RlbGV0ZSB0b2RvcyBhbmQgcmVtb3ZlIGZyb20gYXJyYXkgYmFzZWQgb24gdGhlIHVuaXF1ZSBJRCBudW1iZXIgcGFzc2VkXG5jb25zdCBkZWxUb2RvID0gKElEKSA9PiB7XG4gICAgY29uc3QgZGVsSW5kZXggPSBhbGxUb2Rvcy5maW5kSW5kZXgodG9kbyA9PiB7XG4gICAgICAgIHJldHVybiB0b2RvLnRvZG9JRCA9PT0gSUQ7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coYERlbGV0ZSAke2RlbEluZGV4fWApO1xuICAgIFxufVxuXG5kZWxUb2RvKDIpO1xuXG5cbi8vc2hvdyBhbGwgdG9kb3MgaW4gRE9NXG5jb25zdCBkaXNwbGF5VG9kb3MgPSAoKSA9PiB7XG4gICAgLy9jbGVhciB0aGUgRE9NIGVsZW1lbnRcbiAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgIC8vbG9vcCB0aHJvdWdoIGFsbFRvZG9zIGFuZCBjcmVhdGUgZGl2IGVsZW1lbnRzIHRvIGRpc3BsYXlcbiAgICAgZm9yIChjb25zdCB0b2RvIG9mIGFsbFRvZG9zKSB7XG4gICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG9cIik7XG4gICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgdG9kby50b2RvSUQpO1xuICAgICAgICAgZGl2LmlubmVyVGV4dCA9IGAke3RvZG8udGl0bGV9LCAke3RvZG8udG9kb0lEfWA7XG4gICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgIH1cblxufTtcblxuXG5leHBvcnQge3Rlc3RGbiwgZGlzcGxheVRvZG9zLCBhbGxUb2Rvc307XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7dGVzdEZuLCBhbGxUb2RvcywgZGlzcGxheVRvZG9zfSBmcm9tICcuL3RvZG9zLmpzJztcblxuLy9kaXNwbGF5IGhvbWVwYWdlIC0gc2hvdyBhbGwgdG9kb3MgaW4gdGhlIGNvbnRlbnQgc2NyZWVuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnRlbnQuaW5uZXJUZXh0ID0gXCJBZGQgdG9kb3MgaGVyZVwiO1xuXG50ZXN0Rm4oKTtcblxuY29uc29sZS5sb2coYWxsVG9kb3MpO1xuXG5kaXNwbGF5VG9kb3MoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=