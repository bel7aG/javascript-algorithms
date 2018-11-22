const charCounts = (str) => {
  let obj = {}, char
  for (let i = 0; i < str.length; i++) {
    char = str[i].toLowerCase()
    if (obj[char] > 0) {
      obj[char]++
    } else {
      obj[char] = 1
    }
  }
  return obj
}

console.log(charCounts("Belhassen Gharsallah"))
