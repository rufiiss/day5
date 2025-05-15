function doubleEachCharacter(str) {
    let doubledString = ""; // Создаём пустую строку для результата

    for (let i = 0; i < str.length; i++) {
      doubledString += str[i] + str[i]; // Добавляем каждый символ дважды
    }

    return doubledString; // Возвращаем новую строку
  }

  // Примеры использования:
  console.log(doubleEachCharacter("hello")); // "hheelllloo"
  console.log(doubleEachCharacter("abc")); // "aabbcc"
  console.log(doubleEachCharacter("123")); // "112233"
  console.log(doubleEachCharacter("!")); // "!!"
