// this function assigns students grades depending on  their score
const readline = require('readline-sync');
function assignGrade(score){
    // promp user to input the score
    // let score = prompt("Enter student score: ");
    score = Number(score); //converts input to a number
    // check if score is valid should be between 0 - 100
    if(score < 0 || score > 100){
        console.log ("Please enter a valid score!");
    }else{
    
    let grade;
    if(score >= 79){
        grade = 'A';
    }else if(score >= 60 && score < 79){
        grade = 'B';
    }else if(score >= 49 && score < 60){
        grade = 'C';
    }else if(score >= 40 && score < 49){
        grade = 'D';
    }else if(score < 40){
        grade = 'E';
    }
    console.log(`student score: ${score} and Grade: ${grade}`);
}
}

const score = parseFloat(readline.question('Enter Student Score: '));

const grade = assignGrade(score);

