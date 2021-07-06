const numbersofStrings = process.argv.slice(2);
const numbers = numbersofStrings.map(number=>parseInt(number,10));
const sum =numbers.reduce((sum,number)=>sum+number);
console.log(sum);