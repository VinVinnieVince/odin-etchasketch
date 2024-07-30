// eas - Etch-A-Sketch

const canvasWrap = document.querySelector('.canvasWrapper');
const canvasGrid = document.createElement('div');
canvasGrid.classList.add('canvas');
canvasWrap.appendChild(canvasGrid);

function createSquareAt(row) {
    const square = document.createElement('div');
    square.classList.add('formatSquares');

    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = '#000000';
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

// To provide starter length when page first loaded
setDimensions(16);

const setCountBtn = document.querySelector('.setSideCount');
setCountBtn.addEventListener ('click', () => {
    canvasGrid.textContent = '';
    let numSquares = prompt('How many squares per side? (Pick between 1 and 100)');

    while ((numSquares < 1) || (numSquares > 100)) {
        numSquares = prompt('Please pick a number between 1-100!');
    }

    setDimensions(numSquares);
})

const allSquares = document.querySelectorAll('.formatSquares');

function setColor(color) {
    allSquares.forEach((squ) => {
        squ.addEventListener('mouseenter', () => {
            squ.style.backgroundColor = color;
            });
        });
};

// Code from: https://stackoverflow.com/questions/1484506/random-color-generator
function randomClr() { return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")}

function clearCanvas() {
    if (confirm('Warning! This will clear canvas. Proceed?')) {
        allSquares.forEach((squ) => {
                squ.style.backgroundColor = '#FFFFFF'
        });
    }
}

setColor('#000000');
const black = document.querySelector('.black');
black.addEventListener('click', () => {
    setColor('#000000');
});

const rb = document.querySelector('.rainbow');
rb.addEventListener('click', () => {
    allSquares.forEach((squ) => {
        squ.addEventListener('mouseenter', () => {
            squ.style.backgroundColor = randomClr();
            });
        });
    });