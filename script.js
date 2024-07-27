

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



//more button
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

function showMore() {
    const moreItems = document.getElementById('moreItems');
    moreItems.classList.toggle('hidden');
}



