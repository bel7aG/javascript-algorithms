/* Solution: 1 */
let palindrome = (current) => {
  if (!current.length) {
    return `EMPTY!`;
  }
  if (current.length === 1) {
    return `Obviously it is !! haHaHaha`;
  }

  let revStr = '';
  for (let i = 0; i < current.length; i++) {
    revStr = current[i] + revStr;
  }
  return current === revStr ? 'Palindrom' : 'not Palindrome';
};

console.log(palindrome('poop'));
console.log(palindrome('zzs'));
console.log(palindrome(''));
console.log(`${palindrome('A')}\n`);

/* Solution: 2 */
palindrome = (currentString) => (
  currentString.split('').every((char, index) => char === currentString[currentString.length - index - 1])
);

console.log(palindrome('poop'));
console.log(palindrome('zzs'));
console.log(palindrome(''));
