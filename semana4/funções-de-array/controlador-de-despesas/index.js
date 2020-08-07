
//array de gastos
let arrayDeGastos =[]

//função que adiciona a despesa na lista
function adicionaDespesa(){
    const valorGasto = document.getElementById("valor").value
    const tiposDeGasto = document.getElementById("tipos-de-gasto").value
    const descriçãoGasto = document.getElementById("descrição").value
    //objeto da 1 seção
    const despesaCompleta = {
    valor: valorGasto,
    tipo: tiposDeGasto,
    descrição: descriçãoGasto
    }
    const containerExtrato = document.getElementById("container-do-extrato")
    if(valorGasto.value !== 0 && tiposDeGasto.value !== "" && descriçãoGasto.value !== ""){
    containerExtrato.innerHTML += `<h4>Tipo de gasto:</h4><span>${tiposDeGasto.value}</span><h4>Valor:</h4><span>${valorGasto.value}</span>`
} else {
    alert ("Algum campo não preenchido, por favor tente novamente preenchendo todos os campos!")
    } //adiciona as despesas num array de objetos
    arrayDeGastos.push(despesaCompleta)
    console.log(despesaCompleta)
    valorGasto.value = ""
    tiposDeGasto.value = ""
    descriçãoGasto.value = ""
}
//função apaga os inputs
console.log(containerExtrato)

//função aperta o botão primeira seção
function cadastrar(função){
    adicionaDespesa()
}