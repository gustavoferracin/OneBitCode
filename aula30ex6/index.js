let results = document.querySelector(".results")
let number = document.querySelector('.number');

let c = 1
let str = ''

function makeTable() {
  while (c <= 20) {
   str += String(number.value * c) + " " 
    console.log(str)
    c++
  }
}

number.addEventListener("focusout", () => {
  makeTable()
  results.innerHTML = str
})


const palavra = prompt("Digite uma palavra");
let palavraInvertida = ""

for (let i = palavra.length - 1; i>= 0; i--) {
  palavraInvertida += palavra[i]
  console.log(String(palavraInvertida))
}
if (palavra === palavraInvertida) {
  alert(palavra + " é um palindromo!")
} else {
  alert(palavra + " não é um palindromo!\n\n" +
  palavra + "!==" + palavraInvertida)
}
