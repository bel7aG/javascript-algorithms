/* Solution: 1  ==> one line */
let reverseInt = (x) => (
  parseInt(x.toString().split('').filter((char) => char !== '-').reverse().join(''), 10) * Math.sign(x);
);

console.log(reverseInt(-12));
