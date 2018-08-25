/* Solution: 1 */
/*
const reverse = (string) => (
  string.length > 2 ?
  string.split('').reverse().join('') :
  string === undefined ? 'put your string' : 'damn must be more then two character!';
);

*/

/* Solution: 2 */

const reverse = (string) => {
  let reversedString = '';
  for (let char of string) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

console.log(reverse('ABC'));
