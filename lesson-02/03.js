const studentCodeWithoutDeclarations = `
let grade;
if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score <= 89) {
    grade = 'B';
} else if (score >= 70 && score <= 79) {
    grade = 'C';
} else if (score >= 46 && score <= 69) {
    grade = 'D';
} else if (score >= 0 && score <= 45) {
    grade = 'F';
} else {
    grade = 'Invalid score';
}
`;

const testCode = `let score = ${score}; ${studentCodeWithoutDeclarations} return grade;`;
const executeScript = new Function(testCode);
const grade = executeScript();

console.log(grade);
