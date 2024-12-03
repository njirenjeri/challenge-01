// This function schecks if driver is within the speed limit or not
let totalPoints = 0;
let speedLimit = 70;
function speedChecker(speed){
    // If within speed limit OK
    if(speed < speedLimit){
        console.log("OK");
    }else{
        // calculates speed above the speed limit
        let difference = speedLimit - speed;
        const demeritPoints = Math.floor(difference/5);
        totalPoints += demeritPoints; //keeps track of the points such that if they get to 12, they are suspended

        if(totalPoints >= 12){
            console.log("License Suspended!");
        }else{
            console.log(`Points: ${totalPoints}`);
        }
    }
}