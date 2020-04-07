//On loading the screen the div cells are created that are used for the grid by using the appendChild and a loop.
document.getElementById("canvasContainer").addEventListener("load", createGrid()) 

function createGrid() {
    for (i = 0; i < 256; i++) {
        createDiv();
    }
}

function createDiv() {
    let div = document.createElement("div");
    div.innerText = "test"
    div.className = "gridCell";
    document.getElementById("canvasContainer").appendChild(div);    
}




