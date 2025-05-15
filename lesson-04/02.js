function findUniqueElements(array) {
    let uniqueArray = []; // Массив для уникальных элементов

    for (let i = 0; i < array.length; i++) {
      if (!includesElement(uniqueArray, array[i])) { // Используем ранее написанную функцию includesElement
        uniqueArray.push(array[i]);
      }
    }

    return uniqueArray;
  }

  // Пример использования:
  console.log(findUniqueElements([1, 2, 3, 2, 1, 4])); // [1, 2, 3, 4]
  console.log(findUniqueElements(["apple", "banana", "apple", "cherry"])); // ["apple", "banana", "cherry"]
