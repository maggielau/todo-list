import addImg from './images/plus.svg';


//Display sidebar elements
const displaySidebar = () => {

    const sidebar = document.getElementById('sidebar');
    

    //Modal
    const modal = document.getElementById("addModal");
    const addButton = document.createElement('button');
    // addButton.id = "addButton";
    addButton.className = "addButton";
    const addPic = new Image();
    addPic.src = addImg;
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

export {displaySidebar};





