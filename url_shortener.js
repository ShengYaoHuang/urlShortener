function random(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function urlShortener() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'

  let collection = []
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))

  let shortUrl = ''
  for (let i = 0; i < 5; i++) {
    shortUrl += random(collection)
  }
  // console.log(shortUrl)
  return shortUrl
}

module.exports = urlShortener