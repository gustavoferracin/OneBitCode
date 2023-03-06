let imoveisRegistrados = []
let option = ""
do {
  option = prompt("Nº de imoveis cadastrados:" + imoveisRegistrados.length + "\nDigite 1 para cadastrar um novo imovel" + "\nDigite 2 para sair")
  switch(option) {
    case "1":
      let imovel = {}
      imovel.proprietario = prompt("qual o nome do proprietário?")
      imovel.quartos = prompt("qual a quantidade de quartos?")
      imovel.banheiro = prompt("qual a quantidade de banheiros?")
      imovel.garagem = prompt("ele possui garagem?")

      imoveisRegistrados.push(imovel);
      console.log(imoveisRegistrados);
      break

    case "2":
      alert(imoveisRegistrados);
    }



} while (option !== "3")
