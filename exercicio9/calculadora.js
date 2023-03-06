var option = 0;
let base = 0;
let h = 0;
let lado = 0;
let baseMenor = 0;
let baseMaior = 0;
let pi = 3.14;
let raio = 0;

function areaTriangulo () {
  base = prompt("Qual a base do triângulo?");
  h = prompt("Qual a altura do triângulo?");
  let areaTri = base * h / 2;
  alert ("A área do triângulo é: " + areaTri);
}

function areaRetangulo () {
  base = prompt("Qual a base do retângulo?");
  h = prompt("Qual a altura do retângulo?");
  alert("A área do retângulo é: " + (h * base));
}

function areaQuadrado () {
  lado = prompt("Qual o lado do quadrado?");
  alert("A área desse quadrado é: " + (lado * lado));
}

function areaTrapezio () {
  baseMaior = prompt("Qual a base maior do trapézio?");
  baseMenor = prompt("Qual a base menor do trapézio?");
  h = prompt("Qual a altura do trapézio?");
  areaTrap = ((parseFloat(baseMaior) + parseFloat(baseMenor)) * parseFloat(h)) / parseFloat(2)
  alert("A área do trapézio é: " + areaTrap);
}

function areaCirculo () {
  raio = prompt("Qual o raio do círculo?")
  alert("A área do círculo é: " + (pi * raio * raio))
}

do {option = prompt("Bem vindo a calculadora geométrica!\n1- área do triângulo \n2- área do retângulo\n3- Área do quadrado\n4- Área do trapézio\n5- Área do círculo\n6- Sair")
  switch (option) {
  case "1": areaTriangulo() 
  case "2": areaRetangulo()
  case "3": areaQuadrado()
  case "4": areaTrapezio()
  case "5": areaCirculo()
  default: alert("Insira uma opção válida!")
}

} while (option != "6");


