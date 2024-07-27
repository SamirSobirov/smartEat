document.getElementById('toggleButton').addEventListener('click', function() {
    const content = document.getElementById('content');
    const button = document.getElementById('toggleButton');
    content.classList.toggle('hidden');
    button.classList.toggle('rotate');
});
