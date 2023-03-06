let vagas = [ 
  {Indice: 0, Nome: "Dev Junior", Candidatos: 29, dataLimite: "07/07/2023", description:  "descrição da vaga", nomeCandidatos: ["Jonas", "Maria", "Antônio", "Enéias", "Maria"]},
  {Indice: 1, Nome: "Médico", Candidatos: 102, dataLimite: "02/05/2023", description:  "descrição da vaga", nomeCandidatos: ["Jonas", "Maria", "Antônio", "Enéias", "Maria"]},
  {Indice: 2, Nome: "Engenheiro Civil", Candidatos: 50, dataLimite: "29/04/2023", description:  "descrição da vaga", nomeCandidatos: ["Jonas", "Maria", "Antônio", "Enéias", "Maria"]},
  {Indice: 3, Nome: "Músico", Candidatos: 2, dataLimite: "08/06/2023", description:  "descrição da vaga", nomeCandidatos: ["Jonas", "Maria", "Antônio", "Enéias", "Maria"]}
]


console.log(vagas[0].nomeCandidatos)
let option = 0

function verificarCandidatos(num) {
  if (vagas[num].Candidatos != undefined) {
    return vagas[num].Candidatos
  } else {
    return "Nenhum"
  }
}

function listar() {
  for (let i = 0; i < vagas.length; i++) {
    alert("Índice: " + vagas[i].Indice + "\nNome: " + vagas[i].Nome + "\nCandidatos: " + verificarCandidatos(i))
  }
}

function visualize() {
  let number = prompt("Digite o índice da vaga que deseja visualizar")
  alert("Índice: " + vagas[number].Indice + "\nNome: " + vagas[number].Nome + "\nDescrição: " + vagas[number].description+ "\nData limite: " + vagas[number].dataLimite + "\nCandidatos: " + vagas[number].Candidatos +"\n"+ vagas[number].nomeCandidatos)
}

function criarVaga() {
  let job = {}
  job.Indice = vagas.length
  job.Nome = prompt("Qual o nome da vaga?");
  job.description = prompt("Qual a descição da vaga?");
  job.dataLimite = prompt("Qual a data limite da vaga? (DD/MM/AAAA)");
  
  if (confirm("Nome: " +job.Nome + "\nDescrição: " + job.description + "\nData limite: " + job.dataLimite + "\n\nEssas informações estão corretas?")) {
    alert("Vaga adicionada!")
    vagas.push(job);
    console.log(vagas)
  } else {alert("Processo cancelado")}
}

function cadastrarCandidato () {
  let nomeCandidato = prompt("Digite o nome do candidato: ");
  let index = prompt("Digite o índice da vaga: ");

  if(confirm("A vaga selecionada é: " + vagas[index].Nome + "\nCom a data limite de: " + vagas[index].dataLimite + "\n\nDeseja cadastro o candidato "+ nomeCandidato +" nesta vaga?")){
    if(vagas[index].nomeCandidatos != undefined) {
      vagas[index].nomeCandidatos.push(nomeCandidato)
    } else {
      vagas[index].nomeCandidatos = [nomeCandidato  ]
    }
    if(vagas[index].Candidatos != undefined){
      vagas[index].Candidatos++;
    } else {
      vagas[index].Candidatos = 1
    }

 } else {
  alert("Operação encerrada!")
 }
}

function remover() {
  let index = prompt("Digite o indice da vaga que deseja excluir!") 
  if (index >= 0) {
    if (confirm("Tem certeza de que deseja exluir a vaga " + vagas[index].Nome + "?")) {
      let splice = vagas.splice(index,1)
      console.log(splice)
      console.log(vagas)
    } else {
      alert("Operação Cancelada!")
    }
  } else {
    alert("Esse indice não existe!")
  }
}

do {option = prompt("1- Listar vagas disponíveis\n2- Criar uma nova vaga\n3- Visualizar uma vaga\n4- Inscrever um candidato em uma vaga\n5- Excluir uma vaga\n6- Sair")
switch(option) {
  case "1": listar();
    break
  case "2": criarVaga();
    break
  case "3": visualize();
    break
  case "4": cadastrarCandidato();
    break
  case "5": remover()
    break
  default: "Insira uma opção válida"
}} while (option != 6) 
