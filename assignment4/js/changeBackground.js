document.getElementById('changeColorButton').addEventListener('click', function() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});