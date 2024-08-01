function updateMessage() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checkedCount = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  const message = document.getElementById("message");
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

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  const message = document.getElementById("messages");
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

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  const message = document.getElementById("messages3");
  const remaining = 2 - checkedCount;

  if (remaining > 0) {
    message.textContent = `Выберите еще хотя бы ${remaining} элемента`;
  } else {
    message.textContent = "Достаточное количество элементов выбрано";
  }
}

// select spans
// 1
document.querySelector(".trigger1").addEventListener("click", function () {
  document.querySelector(".custom-options").classList.toggle("hidden");
});

document.querySelectorAll(".custom-options span").forEach((option) => {
  option.addEventListener("click", function () {
    document.querySelector(".trigger1").textContent = this.textContent;
    document.querySelector(".custom-options").classList.add("hidden");
  });
});

document.addEventListener("click", function (e) {
  if (!document.querySelector(".relative").contains(e.target)) {
    document.querySelector(".custom-options").classList.add("hidden");
  }
});

// 2
document.querySelector(".trigger2").addEventListener("click", function () {
  document.querySelector(".custom-options2").classList.toggle("hidden");
});

document.querySelectorAll(".custom-options2 span").forEach((option) => {
  option.addEventListener("click", function () {
    document.querySelector(".trigger2").textContent = this.textContent;
    document.querySelector(".custom-options2").classList.add("hidden");
  });
});

document.addEventListener("click", function (e) {
  if (!document.querySelector(".relative").contains(e.target)) {
    document.querySelector(".custom-options").classList.add("hidden");
  }
});

// 3
document.querySelector(".trigger3").addEventListener("click", function () {
  document.querySelector(".custom-options3").classList.toggle("hidden");
});

document.querySelectorAll(".custom-options3 span").forEach((option) => {
  option.addEventListener("click", function () {
    document.querySelector(".trigger3").textContent = this.textContent;
    document.querySelector(".custom-options3").classList.add("hidden");
  });
});

document.addEventListener("click", function (e) {
  if (!document.querySelector(".relative").contains(e.target)) {
    document.querySelector(".custom-options").classList.add("hidden");
  }
});

if (goal === "maintain") {
  target_p.innerHTML = `<b>Выберите значение …</b>`;
} else if (goal === "lose") {
  tdee -= 500;
  target_p.innerHTML = `<b></b>`;
} else if (goal === "gain") {
  tdee += 500;
  target_p.innerHTML = `<b></b>`;
}

document.getElementById("no-snacks").addEventListener("change", function () {
  const checkboxes = document.querySelectorAll(".checkbox");
  if (this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox !== this) {
        checkbox.checked = false;
      }
    });
  }
});

const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach((checkbox) => {
  if (checkbox.id !== "no-snacks") {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        document.getElementById("no-snacks").checked = false;
      }
    });
  }
});
