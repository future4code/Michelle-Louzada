
process.argv[0];
process.argv[1];

// ECERCICIO 1

// const name = process.argv[2]
// const idade = Number(process. argv[3])
// const soma = Number(process.argv[4])

// console.log("Olá, "+name+"! Você tem "+idade+" anos. Em sete anos você terá "+(idade+soma)+"")

//EXERCICIO 2

// const numero1 = Number(process.argv[2])
// const numero2 = Number(process. argv[3])

// console.log("resposta: "+(numero1+numero2)+"")

//Exercicio 3

const tarefa = process.argv[2]

const addTarefa = (tarefa) => {
    const listaDeTarefas = []
    const tarefas = [
        {
        tarefas: [...listaDeTarefas, tarefa]
        }
    ]
    
    return tarefas
}
console.log(addTarefa(tarefa))