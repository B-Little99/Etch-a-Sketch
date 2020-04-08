//On loading the screen the div cells are created that are used for the grid by using the appendChild and a loop.
document.getElementById("canvasContainer").addEventListener("load", createGrid()) 

function createGrid() {
    for (i = 0; i < 256; i++) {
        createDiv();
    }
}

function createDiv() {
    let div = document.createElement("div");
    div.className = "gridCell";
    document.getElementById("canvasContainer").appendChild(div);    
}

//This sets up the event listener when the window is loaded for each grid cell
let gridCell = document.getElementsByClassName("gridCell");

for (i = 0; i < gridCell.length; i++) {
    gridCell[i].id = [i];
    gridCell[i].addEventListener("mouseover", placeColour);
}

//Adding the colour as the user hovers over the various cell tiles.
function placeColour(){
    this.style.backgroundColor = colour;    
}