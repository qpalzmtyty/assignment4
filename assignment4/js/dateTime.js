function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('dateTimeDisplay').textContent = now.toLocaleString('en-US', options);
}
setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call