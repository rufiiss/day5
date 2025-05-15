function findUniqueElements(array) {
    let uniqueArray = []; // Создаём массив для хранения уникальных значений

    for (let i = 0; i < array.length; i++) {
      if (!includesElement(uniqueArray, array[i])) { // Используем includesElement
        uniqueArray.push(array[i]);
      }
    }

    return uniqueArray; // Обязательно возвращаем результат!
  }

  // Примеры:
  console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
  console.log(findUniqueElements(["apple", "banana", "apple", "orange", "banana"])); // ["apple", "banana", "orange"]
  console.log(findUniqueElements([true, false, true, false])); // [true, false]
