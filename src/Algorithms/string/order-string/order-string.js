
const order = (words) => (
  words.length ? (() => {
    let wordsArray = words.split(' ')
    let getNumber = wordsArray.map((word) => word.split(``))
      .map((charArray) => charArray.find((char) => char.charCodeAt() >= 48 && char.charCodeAt() <= 57))
      .join(``)

    console.log(getNumber)
    let result = []
    for (let i = 0; i < wordsArray.length; i++) {
      result[Number(getNumber[i])] = wordsArray[i]
    }
    return result.filter(word => word).join(` `)
  }) : ``
)


let jouda = order("be1 so0 it60 and4 lol4 x3D")()
console.log(jouda)
