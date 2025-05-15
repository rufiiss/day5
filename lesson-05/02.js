function updateGallery(gallery, artwork, newValue) {
  gallery[artwork] = newValue; // Обновляем или добавляем произведение
}

// Объявляем объект галереи перед вызовами
const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
};

// Вызываем функцию для обновления галереи
updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506');
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali');

console.log(gallery);
