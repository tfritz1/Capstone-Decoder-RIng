// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function encoding(letter, alphabet) {
  let output = ""
  for (let i=0; i < alphabetLetters.length; i++){
    if (alphabetLetters[i] === letter) {
      output = alphabet[i]
    }
  }
  return output
}

function decoding(letter, alphabet) {
  let output = ""
  for (let i=0; i < alphabet.length; i++) {
    if (alphabet[i] === letter){
    output = alphabetLetters[i]
  }
}
  return output
}

function substitution(input, alphabet, encode = true) {
  if (!alphabet || alphabet.length < 26) {
    return false
  }

  alphabet = alphabet.slice("")
  
  for (let i=0; i < alphabet.length; i++){
    for (let j=0; j < alphabet.length; j++){
      if (alphabet[i] === alphabet[j] && i !== j){
        return false
      }
    }
  }

  let array = []

  input = input.toLowerCase()

  let codePhrase = input.split(" ")
  console.log(codePhrase)
  codePhrase.forEach((word) => {
    let letters = word.split("")
    let message = []
    letters.forEach((character) => {
      if (encode === true){
        message.push(encoding(character, alphabet))
      }
      else {
        message.push(decoding(character, alphabet))
      }
    })
    message = message.join("")
    array.push(message)
  })
  array = array.join(" ")
  return array
  }

return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
