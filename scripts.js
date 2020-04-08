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
    gridCell[i].addEventListener("mouseover", placeColour);
}

//Adding the colour as the user hovers over the various cell tiles.
let colour;

function placeColour(){
    randomColour();
    this.style.backgroundColor = colour;    
}

function randomColour(){
    let red = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    colour = `RGB( ${red}, ${blue}, ${green})`; // Here I use template literals so I can easily include the different colours in my string.
}

//Reset button to clear the board of the colours when the grid is filled or the user wants to start over

document.getElementById("resetButton").addEventListener("click", reset);

function reset(){
    for (i = 0; i < gridCell.length; i++) {
        gridCell[i].style.backgroundColor = "RGB(255, 255, 255)";
    }
}