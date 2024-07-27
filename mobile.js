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

document.getElementById('toggleButtonCooking').addEventListener('click', function() {
    const content = document.getElementById('contentCooking');
    const button = document.getElementById('toggleButtonCooking');
    content.classList.toggle('hidden');
    button.classList.toggle('rotate');
});



document.getElementById('toggleButtonDish').addEventListener('click', function() {
    var contentDish = document.getElementById('contentDish');
    var toggleButton = document.getElementById('toggleButtonDish').querySelector('img');
    
    contentDish.classList.toggle('hidden');
    toggleButton.classList.toggle('rotated');
});



function updateMessage() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    const message = document.getElementById('message');
    const remaining = 2 - checkedCount;

    if (remaining > 0) {
        message.textContent = `Выберите еще хотя бы ${remaining} элемента`;
    } else {
        message.textContent = "Достаточное количество элементов выбрано";
    }
}