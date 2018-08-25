const reverse = (string) => (
  string.length > 2 ?
  string.split('').reverse().join('') :
  string === undefined ? 'put your string' : 'damn must be more then two character!';
);

console.log(reverse(''));
