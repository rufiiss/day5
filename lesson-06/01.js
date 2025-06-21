// Реализация функции filter
function filter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Код слайдера
document.addEventListener("DOMContentLoaded", () => {
  const WEB_TECH_IMAGES = [
    "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg",
    // добавьте другие URL изображений по необходимости
  ];

  let currentIndex = 0;

  // Получаем элементы с правильными id
  const imgElement = document.querySelector("#web-tech-image");
  const prevButton = document.querySelector("#prev-button");
  const nextButton = document.querySelector("#next-button");

  // Проверяем, что элементы существуют
  if (imgElement && prevButton && nextButton) {
    // Функция обновления изображения
    function updateImage() {
      imgElement.src = WEB_TECH_IMAGES[currentIndex];
    }

    // Обработчики событий
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % WEB_TECH_IMAGES.length;
      updateImage();
    });

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
      updateImage();
    });

    // Устанавливаем начальное изображение
    updateImage();
  }
});