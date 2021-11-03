// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 
  function caesar(input, shift, encode = true) {

    if (!shift || shift === 0 || shift < -25 || shift > 25 ){
      return false 
    }
    if (encode) {
      shift *= 1
    }
    else {
      shift *= -1
    }

    let arrayInput = inputArrayCharacters(input)
    const messageCode = arrayInput.map((character) => {
      let indexChange = alphabet.indexOf(character) + shift
      
      if (indexChange < 0) {
        indexChange += 26
      }
      if (indexChange > 25) {
        indexChange -= 26 
      }
      if (character === " " || !alphabet.includes(character)) {
        return character
      }
      character = alphabet[indexChange]
      return character
    })
    return messageCode.join("")
  }

    function inputArrayCharacters (input) {
      let arrayInput = []
      for (let i=0; i < input.length; i++){
        let messageLowercase = input[i].toLowerCase()
        arrayInput.push(messageLowercase)
      }
      return arrayInput
    }  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
