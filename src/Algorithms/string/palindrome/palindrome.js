/* Solution: 1 */
let palindrome = (current) => {
  if (!current.length) {
    return `EMPTY!`;
  }
  if (current.length === 1) {
    return `Obviously it is !! haHaHaha`;
  }

  let revStr = '';
  for (let i = current.length; i !== 0; i--) {
    revStr = revStr + current[i];
  }
  return current === revStr ? 'Palindrom' : 'not Palindrome';
                           /*    true     :     false      */
};

console.log(palindrome('radar'));
console.log(palindrome(''));
console.log(palindrome('z'));
