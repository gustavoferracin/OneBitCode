
let btnAdd = document.querySelector("#btnAdd");
let numRemove = document.querySelector("#numRemove");
let btnRemove =  document.querySelector("#btnRemove");
let lista = document.getElementById('lista')


btnAdd.addEventListener("click", () => {
  const pos = document.querySelector("#position").value;
  const names = document.querySelector("#name").value;
  const num = document.querySelector("#num").value;

  const jogador = document.createElement("li");

  jogador.id = 'jogador' + num 
  jogador.innerText = pos + ": " + names + "(" + num + ")"

  document.querySelector("#position").value = '';
  document.querySelector("#name").value ='';
  document.querySelector("#num").value = '';
  
  lista.appendChild(jogador)
});

btnRemove.addEventListener("click", ()=> {
  let numRemove = document.querySelector("#numRemove").value;
  lista.removeChild(document.getElementById("jogador" + numRemove))

  document.querySelector("#numRemove").value = '';
})