// Method: 1 READABLE
const addUpToFirst = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// const deltaFirstOne = performance.now();
// addUpToFirst(1000000000);
// const deltaFirstTwo = performance.now();
// console.log(`First Method Time Elapsed: ${(deltaFirstTwo - deltaFirstOne) / 1000}s`);


// console.log(`\n\nFirst Method\t=\tresult: ${addUpToFirst(1000000000)}\n-----\n\n`);


// Method: 2 FASTER
const deltaSecondOne = performance.now();
const addUpToSecond = (n) => n * (n + 1) / 2;

addUpToSecond(1000000000);
const deltaSecondTwo = performance.now();
console.log(`Second Method Time Elapsed: ${(deltaSecondTwo - deltaSecondOne) / 1000}s`);

// console.log(`Second Method\t=\tresult: ${addUpToSecond(10)}\n-----\n\n`);

const countDown = (n) => n ? (countDown(n - 1) ? console.log(n) : console.log("shit")) : console.log(n);
console.log(countDown(10));
