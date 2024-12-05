// This function schecks if driver is within the speed limit or not
const readline = require('readline-sync');

let totalPoints = 0;
let speedLimit = 70;
function speedChecker(speed){
    // If within speed limit OK
    if(speed <= speedLimit){
        console.log("OK");
        // return "OK";
    }else{
        // calculates speed above the speed limit
        const difference = speedLimit - speed;
        const demeritPoints = Math.abs(difference/5);
        totalPoints += demeritPoints; //keeps track of the points such that if they get to 12, they are suspended
        // console.log(`Points: ${demeritPoints}`);
        if(totalPoints >= 12){
            console.log("License Suspended!");
        }else{
            console.log(`Points: ${totalPoints}`);
        }
    }
}

const speed = parseFloat(readline.question('Enter car speed:'));

const ticketing = speedChecker(speed);

