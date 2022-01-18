
const container = document.querySelector(".container");
const clearButton = document.querySelector('button');
const STANDARDLENGTH = 16;

// Dimensions of canvas
const SIDELENGTH = 1000;



// Function that adds hover class
function addHoverEffect(e){
    console.log(this);
    e.target.classList.add("hover");
    console.log(e.target);
}

function initializeGrid(length){
    // create divs to be the cells
    for (let i = 0; i < length * length; i++){
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cellDimension = SIDELENGTH/length;
        container.style.gridTemplateColumns = `repeat(${length}, ${cellDimension}px)`;
        container.style.gridTemplateRows = `repeat(${length}, ${cellDimension}px)`;
        container.appendChild(cell);
    }

    // set a hover effect for cells
    document.querySelectorAll('.cell').forEach( (unit) => {
        unit.addEventListener("mouseover", addHoverEffect);
    });

    // clear button
    clearButton.addEventListener("click", resetBoard);
}


function resetBoard(){

    document.querySelectorAll('.cell').forEach( (unit) => {
        unit.remove();
    })

    let length = prompt("Canvas size?");

    while (length > 100){
        length = prompt("Canvas size?");
    }

    if (length === ""){
        initializeGrid(STANDARDLENGTH);
    }
    
    initializeGrid(length);

}

initializeGrid(STANDARDLENGTH);



