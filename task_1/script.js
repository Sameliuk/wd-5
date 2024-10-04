function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

function calculateArea(length, width) {
    return length * width;
}

function calculateDiagonal(length, width) {
    return Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2)).toFixed(4);
}

function updateResults() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById('perimeter').textContent = 'Введіть коректні значення для розрахунку.';
        document.getElementById('area').textContent = '';
        document.getElementById('diagonal').textContent = '';
        return;
    }

    document.getElementById('perimeter').textContent = 'Периметр ' + calculatePerimeter(length, width);
    document.getElementById('area').textContent = 'Площа ' + calculateArea(length, width);
    document.getElementById('diagonal').textContent = 'Довжина діагоналі ' + calculateDiagonal(length, width);
}

document.getElementById('length').oninput = updateResults;
document.getElementById('width').oninput = updateResults;