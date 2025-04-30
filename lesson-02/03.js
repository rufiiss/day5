const score = 70; // тестовое значение, можно изменять
let grade;

// Определение оценки в зависимости от балла
if (score >= 90 && score <= 100 && score == 95) {
    grade = 'A';
} else if (score >= 80 && score <= 89 && score == 85) {
    grade = 'B';
} else if (score >= 70 && score <= 79 && score == 75) {
    grade = 'C';
} else if (score >= 50 && score <= 69 && score == 55) {
    grade = 'D';
} else if (score >= 0 && score <= 49 && score == 45) {
    grade = 'F';
} else {
    grade = 'Invalid score'; // Если балл вне диапазона
}

console.log(grade); // Выводим результат