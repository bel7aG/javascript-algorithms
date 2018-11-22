const charCounts = (str) => {
  if (str.length) {

    let obj = {}, char, isOkey

    for (let i = 0; i < str.length; i++) {
      char = str[i].toLowerCase()
      isOkey = (
          (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) ||
          (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) ||
          (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
      )
      if (obj[char] > 0) {
        obj[char]++
      } else if (isOkey){
        obj[char] = 1
      }
    }
    return obj
  }
  return `Empty String`
}

console.log(charCounts(`Belhassen &&&& * $ Gharsallah     # ' " bel7aG OH YEAH`))

/*  Syntax    */

let x = {
  a: 2,
  b: 33
}

console.log(`\n\n\t\t\tx['a'] === x.a : ${x['a'] === x.a} `) //true
