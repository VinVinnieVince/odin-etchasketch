// eas - Etch-A-Sketch

const page = document.querySelector('.canvasWrapper');
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

function setDimensions(num) {
    for (let i = 0; i < num; i++) {
        const currentRow = createRow();
        for (let i = 0; i < num; i++) {
            createSquareAt(currentRow);
        }
    
    const sideCount = document.querySelector('.sideCount');
    sideCount.textContent = String(num);
}};

setDimensions(16);

let sqColor = '#000000'

const allSquares = document.querySelectorAll('.formatSquares');
allSquares.forEach((squ) => {
    squ.addEventListener('mouseenter', () => {
        squ.style.backgroundColor = sqColor;
    });
});