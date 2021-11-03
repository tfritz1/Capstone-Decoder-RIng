// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  

  function polybius(input, encode = true) {
   
    let alphabet = {
      a : "11", b : "21", c : "31", d : "41", e : "51",
      f : "12", g : "22", h : "32", i : "42", j : "42", k : "52",
      l : "13", m : "23", n : "33", o : "43", p : "53",
      q : "14", r : "24", s : "34", t : "44", u : "54", 
      v : "15", w : "25", x : "35", y : "45", z : "55", [" "] : " "
    }

    let decode = {
      11 : "a", 21 : "b", 31 : "c", 41 : "d", 51 : "e",
      12 : "f", 22 : "g", 32 : "h", 42 : "i", 42 : "j", 52 : "k",
      13 : "l", 23 : "m", 33 : "n", 43 : "o", 53 : "p",
      14 : "q", 24 : "r", 34 : "s", 44 : "t", 54 : "u",
      15 : "v", 25 : "w", 35 : "x", 45 : "y", 55 : "z", [" "] : " "
    }
  
function inputArrayCharacters(input){
  let inputArray = []
  for (let i=0; i < input.length; i++){
    inputArray.push(input[i].toLowerCase())
  }
  return inputArray
}

function splitEven(input){
let array2 = []
for (let i=0; i < input.length; i+=2) {
  if(input[i] === " "){
    array2.push(input[i])
    i++
  }
  let substring = input.substring(i, i+2)
  if (substring !== " " && substring.length !== 2) {
    return false
  }
  array2.push(substring)
}
return array2
}

if (encode) {
  let inputCode = inputArrayCharacters(input)
  const encodedMessage = inputCode.map((character) => {
    character = alphabet[character]
    return character
  })
  return encodedMessage.join("")
}
else {
  let inputCode = splitEven(input)
  if (!inputCode) {
    return false
  }
  const decodedMessage = inputCode.map((character) => {
    character = decode[character]
    if (character === "i" || character === "j") {
    character = "i/j"
    }
    return character
  })
  return decodedMessage.join("")
}
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };