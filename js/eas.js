// eas - Etch-A-Sketch

const page = document.querySelector('.pageContainer');
const canvasGrid = document.createElement('div');
canvasGrid.classList.add('canvas');
page.appendChild(canvasGrid);

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('formatSquares');
    canvasGrid.appendChild(square);
}

