document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessages = [];

    if (!email) errorMessages.push("Email is required.");
    if (password.length < 6) errorMessages.push("Password must be at least 6 characters.");
    if (password !== confirmPassword) errorMessages.push("Passwords do not match.");

    document.getElementById('errorMessages').innerHTML = errorMessages.join('<br>');
});