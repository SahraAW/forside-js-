// Array of 8 grades
let grades = [95, 88, 74, 67, 59, 82, 91, 78];

// Step 1:
console.log("Number of grades: ", grades.length);

// Step 2:
function classifyGrade(grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
}


let classifiedGrades = grades.map(grade => {
    return { grade: grade, category: classifyGrade(grade) };
});

// Step 3:
let total = grades.reduce((sum, grade) => sum + grade, 0);
let averageGrade = total / grades.length;

function evaluatePerformance(avgGrade) {
    if (avgGrade >= 90) {
        return "Excellent";
    } else if (avgGrade >= 80) {
        return "Good";
    } else if (avgGrade >= 70) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}

let performance = evaluatePerformance(averageGrade);

// Step 4:
let highestGrade = Math.max(...grades);
let lowestGrade = Math.min(...grades);

console.log("Highest grade: ", highestGrade, "Category: ", classifyGrade(highestGrade));
console.log("Lowest grade: ", lowestGrade, "Category: ", classifyGrade(lowestGrade));
console.log("Average grade: ", averageGrade);
console.log("Class Performance: ", performance);

// Output
console.log("Grades and their categories: ");
classifiedGrades.forEach(item => {
    console.log("Grade: ", item.grade, "Category: ", item.category);
});
