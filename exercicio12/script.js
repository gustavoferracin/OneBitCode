const form = document.getElementById("form");
const btnExp = document.getElementById("addExp");
const btnSalvar = document.querySelector("#btnSalvar");
let radioControl = 0
let info = []


btnExp.addEventListener("click", function() {
  
  let radioAgeFirst = document.createElement("input")
  let radioAgeSecond = document.createElement("input")
  let radioAgeThird = document.createElement("input")
  let techName1 = document.createElement("label")
  let techName2 = document.createElement("label")
  let techName3 = document.createElement("label") 
  let experience = document.createElement("input")
  let experienceLabel = document.createElement("label")
  let br = document.createElement("br")
  let remove = document.createElement("button")


  experienceLabel.for="experience"
  experienceLabel.textContent="Tecnologia"
  experienceLabel.classList.add("labelRadio")
  experience.name="experience"
  experience.classList.add("experience" + radioControl)

  techName1.for= "0to2"
  techName1.textContent = "0 - 2"
  techName1.classList.add("labelRadio")
  techName2.for = "3to4"
  techName2.textContent = "3 - 4"
  techName2.classList.add("labelRadio")
  techName3.for = "5plus"
  techName3.textContent = "5+"
  techName3.classList.add("labelRadio")
  radioAgeFirst.type = "radio"
  radioAgeSecond.type = "radio"
  radioAgeThird.type = "radio"

  radioAgeFirst.value = "0to2"
  radioAgeSecond.value = "3to4"
  radioAgeThird.value = "5plus"

  radioAgeFirst.name = "age" + radioControl
  radioAgeSecond.name = "age" + radioControl
  radioAgeThird.name = "age" + radioControl

  remove.textContent="Remover Campo"
  remove.type= "button"
  
  form.appendChild(br)
  form.appendChild(experienceLabel)
  form.appendChild(experience)
  form.appendChild(radioAgeFirst)
  form.appendChild(techName1)
  form.appendChild(radioAgeSecond)
  form.appendChild(techName2)
  form.appendChild(radioAgeThird)
  form.appendChild(techName3)
  form.appendChild(remove)
  remove.addEventListener("click", ()=> {
    form.removeChild(remove.previousSibling)
    form.removeChild(remove.previousSibling)
    form.removeChild(remove.previousSibling)
    form.removeChild(remove.previousSibling)
    form.removeChild(remove.previousSibling)
    form.removeChild(remove.previousSibling)
    form.removeChild(remove.previousSibling)
    form.removeChild(remove.previousSibling)
    form.removeChild(remove.previousSibling)
    form.removeChild(remove)
  })
  
  return radioControl++
})

btnSalvar.addEventListener("click", ()=> { 
  let starting = radioControl

  let inputNome = document.querySelector("#name")
  info += "Nome: " + inputNome.value
  for (let i = 0; i < starting; i++) {
    let experience = document.querySelector(".experience"+ i)
    let selecionado = document.querySelector("input[name=age"+ i +"]:checked");
    let radioSelecionado = ""
    if (selecionado.value == "3to4") {
      radioSelecionado = '3 - 4 Anos'
    } else if (selecionado.value == "5plus") {
      radioSelecionado = '5 Anos ou mais'
    } else if (selecionado.value == "0to2") {
      radioSelecionado = "0 - 2 Anos"
    }
    console.log(radioSelecionado)
    info += "\nTecnologia: " + experience.value + "Tempo de Experiência: " + radioSelecionado
    console.log(info)
  }

})