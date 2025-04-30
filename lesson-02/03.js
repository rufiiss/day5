const score = 55; // тестовое значение, можно изменять
let grade;

// Определение оценки в зависимости от балла
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
    grade = 'Invalid score'; // Если балл вне диапазона
}

console.log(grade); // Выводим результат
const studentCodeWithoutDeclarations = (0, removeOriginalDeclarations_1.removeOriginalDeclarations)(this.studentCode, ['score']);
const testCode = `let score = ${score}; ${studentCodeWithoutDeclarations}; return grade;`;
const executeScript = new Function(testCode);
const grade = executeScript();
(0, local_cypress_1.expect)(grade).to.equal(expectedGrade);