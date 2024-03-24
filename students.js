// Here,we are prompting user to input student marks
const userInput = prompt("Enter student marks (0-100):")
const marks =parseInt(userInput);

// We are checking if input is vaild by the range 0--100
if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid input. Marks should be between 0 and 100.");
} else {
    // Determining the grade based on the provided grading criteria using switch-case
    let grade;
    switch (true) {
        case (marks > 79):
            grade = 'A';
            break;
        case (marks >= 60 && marks <= 79):
            grade = 'B';
            break;
        case (marks >= 50 && marks <= 59):
            grade = 'C';
            break;
        case (marks >= 40 && marks <= 49):
            grade = 'D';
            break;
        default:
            grade = 'E';
    }

    // Outputting the grade
    console.log("Grade: " + grade);
}
