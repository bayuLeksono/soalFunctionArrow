// 1. discount 20% untuk harga >= 100k
discount = (price) => {
  const disc = 20 / 100
  const minDisc = 100000
  let result

  if (price >= minDisc) {
    let priceToPay = (price - price * disc).toFixed(2)
    result = console.log(
      `selamat kamu dapat discount 20% karena belanja lebih dari Rp ${minDisc}, Total bayar : Rp ${priceToPay}`,
    )
  } else {
    result = console.log(`Total bayar : Rp ${price}`)
  }
}
let checkDiscount = discount(50000)

// 2. vocal letter upper case

vocalUp = (input) => {
  const strLength = input.length
  let result = ''

  for (let i = 0; i < strLength; i++) {
    let char = input[i]
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      // ------------next character--------------
      result += String.fromCharCode(char.toUpperCase().charCodeAt(0) + 1)
      //   result += char.toUpperCase()
    } else {
      result += char
    }
  }
  return result
}
let checkVocalUp = vocalUp('audio')
console.log(checkVocalUp)

// 3. kata depan dan belakang
firstAndLastLetter = (input) => {
  let firstLetter = input.charAt(0)
  let lastLetter = input.charAt(input.length - 1)
  let result = firstLetter + lastLetter
  return result
}
let checkFirstAndLastLetter = console.log(
  firstAndLastLetter('Dwi Bayu Leksono'),
)

// 4. perulangan
repetition = (input, times) => input.repeat(times)
console.log(repetition('Wakwaw', 3))

// 5. random number
generateRandomNumber = () => {
  let generate = Math.floor(Math.random() * (6 - 1)) + 1
  return generate
}
console.log(generateRandomNumber())
