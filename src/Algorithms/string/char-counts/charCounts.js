/* Method 1: no matter if it is a lower or upper cases and Numbers */
const charCountsOne = (str) => {
  if (str) {
    let obj = {}, char, isOkey
    for (let i = 0; i < str.length; i++) {
      char = str[i]
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

console.log(charCountsOne(`Belhassen &&&& * $ Gharsallah     # ' " bel7aG OH YEAH`))

console.log('\n\n\n\n')

//Method 2: just the lower cases and Numbers

const charCountsTwo = (str) => {
  if (str) {
    let obj = {}, char
    for (let i = 0; i < str.length; i++) {
      char = str[i].toLowerCase()
      if (obj[char] > 0) {
        obj[char]++
      } else if (char.match(/[a-z0-9]/)){
        obj[char] = 1
      }
    }
    return obj
  }
  return `Empty String`
}

console.log(charCountsTwo(`Belhassen &&&& * $ Gharsallah     # ' " bel7aG OH YEAH`))

/*  Syntax    */

let x = {
  a: 2,
  b: 33
}

console.log(`\n\n\t\t\tx['a'] === x.a : ${x['a'] === x.a} `) //true
