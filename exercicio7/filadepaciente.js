let queue = ["1: Antônio", "2: Josias", "3: Jailson", "4: Irineu"];
let exibirQ = document.querySelector(".exibirQ");
let submitPaciente = document.querySelector(".submitPaciente");
let inserirPaciente = document.querySelector(".inserirPaciente");
let nextPaciente = document.querySelector(".nextPaciente");
let consultar = document.querySelector(".consultar");
let popUp = document.querySelector(".popUp");

exibirQ.addEventListener('click', ()=> {
  console.log(queue)
})
submitPaciente.addEventListener("click", ()=> {
  queue.push(String(queue.length+1) + ": " +String(inserirPaciente.value));
})
consultar.addEventListener("click", ()=> {
  popUp.classList.remove("hidden");
  nextPaciente.innerHTML = queue[0];
  popUp.addEventListener("click", ()=> {
    popUp.classList.add("hidden");
  })
})
