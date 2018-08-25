/* Solution: 1 */
let reverse = (string) => (
  string.length > 2 ?
  string.split('').reverse().join('') :
  string === undefined ? 'put your string' : 'damn must be more then two character!'
);
console.log(reverse('gepj'));


/* Solution: 2 */
reverse = (string) => {
  let reversedString = '';
  for (let char of string) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

console.log(reverse('gvs'));

/* Solution: 3 */

reverse = (string) => string.split('').reduce((reversedAcc, character) => character + reversedAcc, '');
console.log(reverse('radarr'));
