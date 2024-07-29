// eas - Etch-A-Sketch

const page = document.querySelector('.pageContainer');
const canvasGrid = document.createElement('div');
canvasGrid.classList.add('canvas');
page.appendChild(canvasGrid);

function createSquareAt(row) {
    const square = document.createElement('div');
    square.classList.add('formatSquares');
    row.appendChild(square);
};

function createRow() {
    const squareRow = document.createElement('div');
    squareRow.classList.add('formatRow');
    canvasGrid.appendChild(squareRow);
    return squareRow;
};

let setDimensions= 4;

for (let i = 0; i < setDimensions; i++) {
    const currentRow = createRow();
    for (let i = 0; i < setDimensions; i++) {
        createSquareAt(currentRow);
    }
};

let sqColor = '#000000'

const allSquares = document.querySelectorAll('.formatSquares');
allSquares.forEach((squ) => {
    squ.addEventListener('mouseenter', () => {
        squ.style.backgroundColor = sqColor;
    });
});