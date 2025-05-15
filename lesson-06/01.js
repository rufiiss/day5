let currentIndex = 0; // Индекс текущего изображения

// Получаем элементы
const imgElement = document.querySelector("#slider-image");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

// Функция обновления изображения
function updateImage() {
  imgElement.src = WEB_TECH_IMAGES[currentIndex];
}

// Обработчик кнопки "Next"
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % WEB_TECH_IMAGES.length;
  updateImage();
});

// Обработчик кнопки "Prev"
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
  updateImage();
});

// Устанавливаем начальное изображение
updateImage();
