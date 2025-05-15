function updateGallery(gallery, artwork, newValue) {
  gallery[artwork] = newValue; // Обновляем или добавляем произведение
}

// Примеры использования:
updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506');
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali');

console.log(gallery);
