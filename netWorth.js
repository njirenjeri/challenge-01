// Calculates employee's net salary
const readline = require('readline-sync');

function getNetWorth(basicSalary, benefits){

    const NHIF_RATES = 0.3;
    const PAYE = 0.15;
    const NSSF_RATE = 0.06; 
    
    const grossSalary = basicSalary + benefits;
    
    // Caluclating Deductions
const paye = (grossSalary * PAYE);
const nhif = (grossSalary * NHIF_RATES);
const nssf = (grossSalary * NSSF_RATE);

// calculate Net Salary
const netSalary = grossSalary -(paye + nhif + nssf);

console.log (`Your Net Salary: ${netSalary}`);
}

const basicSalary = parseFloat(readline.question("Enter Your Basic Salary: "));
const benefits = parseFloat(readline.question("Enter Your Benefit Total: "));

const netWorth = getNetWorth(basicSalary, benefits);