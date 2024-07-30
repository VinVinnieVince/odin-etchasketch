// eas - Etch-A-Sketch

const page = document.querySelector('.canvasWrapper');
const canvasGrid = document.createElement('div');
canvasGrid.classList.add('canvas');
page.appendChild(canvasGrid);

function createSquareAt(row) {
    const square = document.createElement('div');
    square.classList.add('formatSquares');

    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = sqColor;
    });
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

const setCountBtn = document.querySelector('.setSideCount');
setCountBtn.addEventListener ('click', () => {
    canvasGrid.textContent = '';
    let numSquares = prompt('How many squares per side? (Pick between 1 and 100)');

    while ((numSquares < 1) || (numSquares > 100)) {
        numSquares = prompt('Please pick a number between 1-100!');
    }

    setDimensions(numSquares);
})

// To provide starter length when page first loaded
setDimensions(16);

function setColor(color) {
    const allSquares = document.querySelectorAll('.formatSquares');
    if (confirm('Warning! This will clear canvas. Proceed?')) {
        allSquares.forEach((squ) => {
                squ.style.backgroundColor = '#FFFFFF'
        });
    }
    allSquares.forEach((squ) => {
        squ.addEventListener('mouseenter', () => {
            squ.style.backgroundColor = color;
        });
    });
};

setColor('#000000');
