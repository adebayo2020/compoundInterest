var principal, rate, number, time;
principal = prompt("Enter the principal amount", "");
rate = prompt("Enter the interest rate in decimals", "");
number = prompt("Enter the number of times interest is compounded per unit time", "");
time = prompt("Enter the time duration", "");

let partOne = (1 + (rate/number));
let partTwo= number * time;

let partThree = Math.pow(partOne, partTwo);
const compoundInterest = principal * partThree;
 
alert("Your compound interest is " + compoundInterest + ".");