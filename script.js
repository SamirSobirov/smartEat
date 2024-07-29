



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


//kolichestvo 2 button
function updateMessages() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    const message = document.getElementById('messages');
    const remaining = 2 - checkedCount;

    if (remaining > 0) {
        message.textContent = `Выберите еще хотя бы ${remaining} элемента`;
    } else {
        message.textContent = "Достаточное количество элементов выбрано";

    }
}






//kolichestvo 2 button
function updateMessages3() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    const message = document.getElementById('messages3');
    const remaining = 2 - checkedCount;

    if (remaining > 0) {
        message.textContent = `Выберите еще хотя бы ${remaining} элемента`;
    } else {
        message.textContent = "Достаточное количество элементов выбрано";

    } 
}



// function showMore() {
//     const moreItems = document.getElementById('more-options1');
//     moreItems.classList.toggle('hidden');
// }

function showMore1() {
    let moreOptions = document.getElementById('more-options');
    if (moreOptions.classList.contains('hidden')) {
        moreOptions.classList.remove('hidden');
    } else {
        moreOptions.classList.add('hidden');
    }
}




function showMore2() {
    let moreOptions = document.getElementById('more-options2');
    if (moreOptions.classList.contains('hidden')) {
        moreOptions.classList.remove('hidden');
    } else {
        moreOptions.classList.add('hidden');
    }
}


function showMore3() {
    let moreOptions = document.getElementById('more-options3');
    if (moreOptions.classList.contains('hidden')) {
        moreOptions.classList.remove('hidden');
    } else {
        moreOptions.classList.add('hidden');
    }
}




function showMore4() {
    let moreOptions = document.getElementById('more-options4');
    if (moreOptions.classList.contains('hidden')) {
        moreOptions.classList.remove('hidden');
    } else {
        moreOptions.classList.add('hidden');
    }
}


function showMore5() {
    let moreOptions = document.getElementById('more-options5');
    if (moreOptions.classList.contains('hidden')) {
        moreOptions.classList.remove('hidden');
    } else {
        moreOptions.classList.add('hidden');
    }
}


function showMore6() {
    let moreOptions = document.getElementById('more-options6');
    if (moreOptions.classList.contains('hidden')) {
        moreOptions.classList.remove('hidden');
    } else {
        moreOptions.classList.add('hidden');
    }
}


function showMore7() {
    let moreOptions = document.getElementById('more-options7');
    if (moreOptions.classList.contains('hidden')) {
        moreOptions.classList.remove('hidden');
    } else {
        moreOptions.classList.add('hidden');
    }
}


function showMore8() {
    let moreOptions = document.getElementById('more-options8');
    if (moreOptions.classList.contains('hidden')) {
        moreOptions.classList.remove('hidden');
    } else {
        moreOptions.classList.add('hidden');
    }
}

function showMore9() {
    let moreOptions = document.getElementById('more-options9');
    if (moreOptions.classList.contains('hidden')) {
        moreOptions.classList.remove('hidden');
    } else {
        moreOptions.classList.add('hidden');
    }
}


function showMore10() {
    let moreOptions = document.getElementById('more-options10');
    if (moreOptions.classList.contains('hidden')) {
        moreOptions.classList.remove('hidden');
    } else {
        moreOptions.classList.add('hidden');
    }
}





    
if (goal === 'maintain') {
    target_p.innerHTML = `<b>Выберите значение …</b>`

}
else if (goal === 'lose') {
    tdee -= 500;
    target_p.innerHTML = `<b></b>`

} else if (goal === 'gain') {
    tdee += 500;
    target_p.innerHTML = `<b></b>`

}


document.getElementById('no-snacks').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.checkbox');
    if (this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox !== this) {
                checkbox.checked = false;
            }
        });
    }
});

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox => {
    if (checkbox.id !== 'no-snacks') {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                document.getElementById('no-snacks').checked = false;
            }
        });
    }
});