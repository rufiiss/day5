function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return true;
      }
    }
    return false;
  }

  // Примеры использования:
  console.log(includesElement([1, 2, 3], 2));  // true
  console.log(includesElement(['apple', 'banana', 'cherry'], 'banana'));  // true
  console.log(includesElement([true, false, true], false));  // true
  console.log(includesElement([10, 20, 30], 5));  // false
