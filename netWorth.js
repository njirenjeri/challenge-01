// Calculates employee's net salary

function getNetWorth(basicSalary, benefits){

    // Constants
    const PAYE_BRACKETS = [
        { upper: 24000, rate: 0.1 },
        { upper: 32333, rate: 0.25 },
        { upper: Infinity, rate: 0.3 }
    ];
    const NHIF_RATES = [
        { upper: 5999, rate: 150 },
        { upper: 7999, rate: 300 },
        { upper: 11999, rate: 400 },
        { upper: 14999, rate: 500 },
        { upper: 19999, rate: 600 },
        { upper: 24999, rate: 750 },
        { upper: 29999, rate: 850 },
        { upper: 34999, rate: 900 },
        { upper: 39999, rate: 950 },
        { upper: 44999, rate: 1000 },
        { upper: 49999, rate: 1100 },
        { upper: 59999, rate: 1200 },
        { upper: 69999, rate: 1300 },
        { upper: 79999, rate: 1400 },
        { upper: 89999, rate: 1500 },
        { upper: 99999, rate: 1600 },
        { upper: Infinity, rate: 1700 }
    ];

    const NSSF_RATE = 0.06; 
    
// Caluclating PAYE
const grossSalary = basicSalary + benefits;
let taxableIncome = grossSalary;
let paye = 0;

for(let bracket of PAYE_BRACKETS){
    if (taxableIncome > bracket.upper){
        paye += bracket.upper * bracket.rate;
        taxableIncome -= bracket.upper;
    }else{
        paye += taxableIncome * bracket.rate;
        break;
    }
}

// calculate NHIF
let nhif = 0;
for(let bracket of NHIF_RATES){
    if(grossSalary <= bracket.upper){
        nhif = bracket.rate;
        break;
    }
}

// calculate NSSF
const nssf = Math.min(grossSalary, 36000) * NSSF_RATE;

// calculate Net Salary
const netSalary = grossSalary -(paye + nhif + nssf);

return netSalary;
}