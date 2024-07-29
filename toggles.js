document.getElementById('toggleButton').addEventListener('click', function() {
    const content = document.getElementById('content');
    const button = document.getElementById('toggleButton');
    content.classList.toggle('hidden');
    button.classList.toggle('rotate');
});



document.getElementById('toggleButtonFood').addEventListener('click', function() {
    const content = document.getElementById('contentFood');
    const button = document.getElementById('toggleButtonFood');
    content.classList.toggle('hidden');
    button.classList.toggle('rotate');
});


document.getElementById('toggleButtonFood2').addEventListener('click', function() {
    const content = document.getElementById('contentFood2');
    const button = document.getElementById('toggleButtonFood2');
    content.classList.toggle('hidden');
    button.classList.toggle('rotate');
});

