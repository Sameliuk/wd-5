const inputLength = document.getElementById('length');
const inputWidth = document.getElementById('width');

const perimeterDiv = document.getElementById('perimeter');
const areaDiv = document.getElementById('area');
const diagonalDiv = document.getElementById('diagonal');

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

function calculateArea(length, width) {
    return length * width;
}

function calculateDiagonal(length, width) {
    return Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2)).toFixed(4);
}

function setIncorrectInputText() {
    perimeterDiv.textContent = 'Введіть коректні значення для розрахунку.';
    areaDiv.textContent = '';
    diagonalDiv.textContent = '';
}

function setCorrectInputText(length, width) {
    perimeterDiv.textContent = calculatePerimeter(length, width);
    areaDiv.textContent = calculateArea(length, width);
    diagonalDiv.textContent = calculateDiagonal(length, width);
}

function updateResults() {
    const length = parseFloat(inputLength.value);
    const width = parseFloat(inputWidth.value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        setIncorrectInputText();
        return;
    }

    setCorrectInputText(length, width);
}

inputLength.addEventListener('input', updateResults);
inputWidth.addEventListener('input', updateResults);