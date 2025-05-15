function getGrade(score) {
    let grade;

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

    return grade;
}

// Получаем значение для тестов Cypress
const score = parseInt(prompt("Введите ваш балл: "), 10);
const grade = getGrade(score);
console.log("Ваша оценка: " + grade);
