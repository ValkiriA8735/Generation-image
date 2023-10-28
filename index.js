let data = [];
let timerId;
let time = 100;
let selectedIndex = 0;
let loadingCount = 5;
function updateTimer() {
  time -= 0.2;
  if (time <= 0) {
    selectImage(selectedIndex + 1);
    time = 100;
  }
  document.querySelector(".bar").style.width = time + "%";
  startTimer();
}
function toggleTimer(event) {
  if (event.target.textContent === "STOP") {
    event.target.textContent = "PLAY";
    stopTimer();
  } else {
    event.target.textContent = "STOP";
    startTimer();
  }
}
function stopTimer() {
  time = 100;
  document.querySelector(".bar").style.width = time + "%";
  clearTimeout(timerId);
}

function startTimer() {
  timerId = setTimeout(updateTimer, 10);
}

function selectImage(index) {
  selectedIndex = Number(index);
  if (selectedIndex === data.length) {
    loadIamges();
  }
  document.querySelectorAll(".thumb div").forEach((item, i) => {
    if (i === selectedIndex) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  });
  document.querySelector(".preview img").src = data[selectedIndex].download_url;
  document.querySelector(".preview img").classList.add("loading");
  document.querySelector(".preview .author").textContent =
    data[selectedIndex].author;
}

function drawImages() {
  const images = document.querySelectorAll(".thumb img");
  data.forEach((item, i) => {
    images[i].src = item.download_url;
    images[i].classList.add("loading");
  });
  selectImage(0);
}

function loadIamges() {
  loadingCount = 5;
  stopTimer();
  const page = Math.floor(Math.random() * (800 / 4));
  const url = "https://picsum.photos/v2/list?page=" + page + "&limit=4";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      data = json;
      drawImages();
    });
}

function onThumbClick(event) {
  if (event.target.tagName !== "IMG") return;
  stopTimer();
  document.querySelector(".play").textContent = "PLAY";
  selectImage(event.target.dataset.index);
}

function removeLoading(event) {
  loadingCount -= 1;
  if (
    loadingCount === 0 &&
    document.querySelector(".play").textContent === "STOP"
  ) {
    startTimer();
  }
  event.target.classList.remove("loading");
}

function init() {
  loadIamges();
  document.querySelector(".thumb").addEventListener("click", onThumbClick);
  document.querySelector(".new").addEventListener("click", loadIamges);
  document.querySelectorAll("img").forEach((item) => {
    item.onload = removeLoading;
  });
  document.querySelector(".play").addEventListener("click", toggleTimer);
}

window.addEventListener("DOMContentLoaded", init);








//////////////////////////////////////////////////

// // Функция для обновления изображения
// function reloadImage(image) {
//   const removeButton = document.getElementById("removeButton");
//   const page = Math.floor(Math.random()*400)
//   fetch('https://picsum.photos/v2/list?page=' + page + '&limit=100')
//   .then((respone) => respone.json())
//   .then((data)=> {
//    document.querySelectorAll("img").forEach((image, i) => {
//         image.src = data[i].download_url;
//         image.classList.add("loading");
//         image.nextElementSibling.textContent = data[i].autor;
// });
//   });
// }

// // Обработчик события для кнопки "reload"
// document.getElementById("reloadButton").addEventListener("click", function() {
//   const images = document.querySelectorAll(".Overlay img");
//   images.forEach(reloadImage);
// });

// // Обработчик события для кнопки "remove"
// document.getElementById("removeButton").addEventListener("click", function() {
//   const imageContainer = document.querySelector(".imageContainer");
//   const overlays = imageContainer.querySelectorAll(".Overlay");
//   if (overlays.length > 1) {
//       overlays[overlays.length - 1].remove();
//       removeButton.disabled = overlays.length <= 1; // Блокируем кнопку, если осталось одно изображение
//   }
// });

// // Обработчик события для кнопки "add"
// document.getElementById("addButton").addEventListener("click", function() {
//   const imageContainer = document.querySelector(".imageContainer");
//   const overlay = document.createElement("div");
//   overlay.classList.add("Overlay");
//   const image = document.createElement("img");
//   reloadImage(image);
//   image.onclick = togglePreview;
//   overlay.appendChild(image);
//   imageContainer.appendChild(overlay);
// });

// // Обработчик события для превью изображений
// function togglePreview(event) {
//   event.target.parentElement.classList.toggle("active");
// }

// // Добавляем обработчик события для существующих изображений
// const images = document.querySelectorAll(".Overlay img");
// images.forEach(function(image) {
//   image.onclick = togglePreview;
// });



/////////////////////////////////////////////////////////////////
// практич. работа "конвертер температуры"

// const temperatureScale = prompt("Введите размерность температуры (C или F):").toUpperCase();

// // Запрашиваем значение температуры
// const temperature = parseFloat(prompt("Введите значение температуры:"));

// // Функция для перевода температуры из Фаренгейтов в Цельсии
// function fahrenheitToCelsius(fahrenheit) {
  
 
// return (fahrenheit - 32) * (5/9);
// }

// // Проверяем, какая размерность выбрана, и приводим значение к Цельсиям, если оно в Фаренгейтах
// if (temperatureScale === 'F') {
//   temperature = 
//   temperature = fahrenheitToCelsius

//   temperature = fahrenheitToC

//   temperature = fahrenheitTo

//   temperature = fahrenheit

//   temperature = f
// fahrenheitToCelsius(temperature);
// }

// // Проверяем температуру и выводим соответствующее сообщение
// if (temperature >= 30) {
//   console.log("It is hot outside");
// } else if (temperature > 20) {
  
 
// console.log("It is warm outside");
// } else {
//   console.log("It is cold outside");
// }