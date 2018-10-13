// Method: 1 READBLE
const addUpToFirst = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(`\n\nFirst Method\t=\tresult: ${addUpToFirst(10)}\n-----\n\n`);


// Method: 2 FAST
const addUpToSecond = (n) => n * (n + 1) / 2;
console.log(`Second Method\t=\tresult: ${addUpToSecond(10)}\n-----\n\n`);
