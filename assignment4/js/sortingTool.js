document.getElementById('sortButton').addEventListener('click', function() {
    const input = document.getElementById('numberInput').value;
    const order = document.getElementById('sortOrder').value;
    const numbers = input.split(',').map(Number);
    const sortedNumbers = order === 'asc' ? numbers.sort((a, b) => a - b) : numbers.sort((a, b) => b - a);
    document.getElementById('sortedResult').textContent = sortedNumbers.join(', ');
});