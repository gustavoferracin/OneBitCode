let firstNum = document.querySelector('#firstNum');
let secondNum = document.querySelector("#secondNum");
let submitCalculadora = document.querySelector("#submitCalculadora")

submitCalculadora.addEventListener('click', ()=> {
  if(firstNum.value != '' && secondNum.value != '') {
    var mult = ((firstNum.value) * (secondNum.value));
    var sub = ((firstNum.value) - (secondNum.value));
    var divisao = ((firstNum.value) / (secondNum.value));
    var soma = (parseFloat(firstNum.value) + parseFloat(secondNum.value));
    alert("soma: " + soma + ', subtração: ' + sub + ', multiplicação: ' + mult + ", divisão: " + divisao)
  }
  else {
    alert("Por favor preencha os campos corretamente!")
  }
} )

let firstName = document.querySelector('.firstName');
let secondName = document.querySelector('.secondName');
let field = document.querySelector('.field');
let by = document.querySelector('.by');
let cadastrar = document.querySelector('.cadastrar')


let nomeCompleto = firstName.value + '' + secondName.value
cadastrar.addEventListener('click', ()=> {
  if(firstName.value != '' && secondName.value != '' && field.value != '' && by.value != '') {
  alert('Nome Completo: '+ firstName.value + " " +secondName.value + "\nCampo de Estudos: " + field.value + "\nIdade: "+ (2023 - parseFloat(by.value)))
  } else {
    alert('Preencha todos os campos!')
  }
})
