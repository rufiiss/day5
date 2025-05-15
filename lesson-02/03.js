function getGrade(score) {
    let grade; // Явное объявление переменной

    if (score >= 90 && score <= 100) {
        grade = 'A';
    } else if (score >= 80 && score <= 89) {
        grade = 'B';
    } else if (score >= 70 && score <= 79) {
        grade = 'C';
    } else if (score >= 50 && score <= 69) {
        grade = 'D';
    } else if (score >= 0 && score <= 49) {
        grade = 'F';
    } else {
        grade = 'Invalid score';
    }

    return grade; // Возвращаем значение
}

// Тестовая среда может использовать эту функцию
const score = 70; // тестовое значение, можно изменять
const grade = getGrade(score);
console.log("Оценка: " + grade);
