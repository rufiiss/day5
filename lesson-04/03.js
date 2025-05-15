function findCommonElements(array1, array2) {
    let commonElements = []; // Создаём массив для хранения общих значений

    for (let i = 0; i < array1.length; i++) {
      if (includesElement(array2, array1[i]) && !includesElement(commonElements, array1[i])) {
        commonElements.push(array1[i]);
      }
    }

    return commonElements; // Возвращаем массив с общими элементами
  }

  // Примеры использования:
  console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]
  console.log(findCommonElements(['apple', 'banana', 'cherry'], ['banana', 'cherry', 'grape'])); // ['banana', 'cherry']
  console.log(findCommonElements([true, false, true], [false, false, true])); // [true, false]
  console.log(findCommonElements([1, 2, 3], [4, 5, 6])); // []
