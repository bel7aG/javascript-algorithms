/* Solution */
const reverseInt = (currentValue) => {
  return Number(currentValue.toString().split('').reverse().join(''));
}

const myInt = reverseInt(23);

console.log(myInt);
console.log(typeof(myInt))
