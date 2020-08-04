//EXERCICIO 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// //resultado é falso por que && é true só se todos elementos for true

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)
// //resultado é false.

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)
// // resultado é true

// console.log("e. ", typeof resultado)
// // resultado é um tipo boolean

//EXERCICIO 2

// let array
// console.log('a. ', array)
// //aparece vazio, undefined

// array = null
// console.log('b. ', array)
// //aparece null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// //aparece que o array possui 11 elementos

// let i = 0
// console.log('d. ', array[i])
// //resposta é 0 dentro do array

// array[i+1] = 19
// console.log('e. ', array)
// // o valor do elemento 1 do array que era 4 foi substituido por 19

// const valor = array[i+6]
// console.log('f. ', valor)
// resposta é 9

//EXERCICIO 1 DE ESCRITA DE CODIGO
// const minhaIdade = prompt("Qual sua idade?")
// const idadeAmigo = prompt("Qual a idade do(a) seu(ua) melhor amigo(a)?")

// let resposta = (minhaIdade) > (idadeAmigo)
// let diferença = Number(minhaIdade) - Number(idadeAmigo)

// console.log("Sua idade é maior do que a do seu melhor amigo " + resposta)
// console.log("difereça de idade " + diferença)


//EXERCICIO 2

// let numeroPar = prompt("Digite um número par")

// let resultado = Number(numeroPar)%2
// console.log(resultado)
 // o resultado da sobra da divisão sempre vai ser 0 quando o numero for par dividido por 2
 // inserindo um numero impar ele deixa uma sobra de divisão

 //EXERCICIO 3

//  let listaDeTarefas = []

//  let tarefaUm = prompt("Digite a primeira tarefa que você precisa fazer hoje")
//  let tarefaDois = prompt("Digite a segunda tarefa que você precisa fazer hoje")
//  let tarefaTres = prompt("Digite a terceira tarefa que você precisa fazer hoje")

//  listaDeTarefas.push(tarefaUm)
//  listaDeTarefas.push(tarefaDois)
//  listaDeTarefas.push(tarefaTres)
// console.log(listaDeTarefas)

// let i = prompt("Qual indice das terefas você ja realizou? 0, 1 ou 2")

// listaDeTarefas.splice(Number(i), 1)
// console.log(listaDeTarefas)

//EXERCICIO 4

// const nomeDoUsuario = prompt("Qual o seu nome?")
// const emailDoUsuario = prompt("Qual o seu e-mail?")

// const resposta = ("O e-mail " + emailDoUsuario + "foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!")
// console.log(resposta)

//EXERCICIO AULA 11 CONDICIONAIS

//EXERCICIO 1 DE INTERPRETAÇÃO DE CODIGO

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// o programa pega o numero que o usuario digita e se o resto da divisão por 2 for 0 ele imprime a mensagem no console passou no teste
// se ele não for 0 ele cai no else que imprime no console ''nao passou no teste''

//EXERCICIO 2 DE INTERPRETAÇÃO DE CODIGO

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// o programa pede ao usuario uma fruta, caso seja laranja, maçã, uva ou pera ele tem um preço pré determinado
// caso seja outra fruta o valor vai ser 5,00, ele imprime no console a fruta e o valor
// a mensagem no console se a fruta for Maçã será '' O preço da fruta Maçã é R$ 2.25"
//Ele apareceria o valor do default

//EXERCICIO 3 DE INTERPRETAÇÃO DE CODIGO

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a primeira linha esta perguntando ao usuario pra digitar um numero e transformando o a resposta que vem em string pra um Number.
// se digitar 10 o console imprime a mensagem '' esse numero passou no teste'' 
//se for -10 o código da erro por que o valor tem que ser maior que 0
//o erro do console é justificado por que o escopo filho não compartilha informações com escopo pai, e o console.log está no escopo pai, ja a variavel no escopo filho.

//EXERCICIO 4 DE ESCRITA DE CODIGO

// let idadeUsuario = Number(prompt("Qual a sua idade?"))

// if(idadeUsuario >= 18){
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir.")
// }

//EXERCICIO 5 DE ESCRITA DE CODIGO

// let turnoDoDia = prompt("Olá, por favor digite o turno que você estuda, se for Matutino utilize um (M) se for Vespértino um (V) se for Noturno um (N).")

// if (turnoDoDia === "M"){
//     console.log("Bom dia!!")
// }
//     else if (turnoDoDia === "V"){
//     console.log("Boa tarde!!")
// }
//     else if (turnoDoDia === "N") {
//         console.log("Boa noite!!")
// } else {
//     console.log("Não conseguimos identificar sua resposta.")
// }

//EXERCICIO 6 DE ESCRITA DE CODIGO

// let turnoDoDia = prompt("Olá, por favor digite o turno que você estuda, se for Matutino utilize um (M) se for Vespértino um (V) se for Noturno um (N).")

// switch (turnoDoDia){
//     case "M":
//     console.log("Bom dia!!")
//     break
//     case "V":
//     console.log("Boa tarde!!")
//     break
//     case "N":
//      console.log("Boa noite!!")
//      break
//      default:
//     console.log("Não conseguimos identificar sua resposta!")
//     break

// }

//EXERCICIO 7 DE ESCRITA DE CODIGO

// let generoFilme = prompt("Qual o gênero do filme?")
// let preçoFilme = Number(prompt("Qual o valor do filme?"))

// if (generoFilme === "Fantasia" && preçoFilme <= 15){
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme!")
// }

//EXERCICIO DESAFIO 1

// let generoFilme = prompt("Qual o gênero do filme?")
// let preçoFilme = Number(prompt("Qual o valor do filme?"))

// if (generoFilme === "Fantasia" && preçoFilme <= 15){
//     let snack = prompt("Qual snack que você quer comprar?")
//     console.log("Bom filme! com", snack)
// } else {
//     console.log("Escolha outro filme!")
// }

//DESAFIO 2 

// const nomeCompleto = prompt('Insira seu nome completo: ')
// let tipoDeJogo = prompt('Insira o tipo de jogo (IN = Internacional / DO = Doméstico: ').toUpperCase()
// let etapaDoJogo = prompt('Qual a etapa do jogo? (SF = Semi-final / DT = Decisão de terceiro lugar / FI = final): ').toUpperCase()
// const categoria = Number(prompt('Insira a categoria: (1, 2, 3 ou 4) '))

// const quantidadeIngresso = Number(prompt('Quantos ingressos serão? '))

// // Jogo Semi-Final
// let categoria1SF = 1320;
// let categoria2SF = 880;
// let categoria3SF = 550;
// let categoria4SF = 220;

// // Jogo Terceiro Lugar
// let categoria1DT = 660;
// let categoria2DT = 440;
// let categoria3DT = 330;
// let categoria4DT = 170;

// // Jogo Final
// let categoria1FI = 1980;
// let categoria2FI = 1320;
// let categoria3FI = 880;
// let categoria4FI = 330;

// let preco;

// // Doméstico
// if(tipoDeJogo === 'DO') {
//     tipoDeJogo = 'Doméstico'
//     // Laço pra Semi-Final
//     if(etapaDoJogo === 'SF') {
//         etapaDoJogo = 'Semi-Final'
//         if(categoria === 1) {
//             preco = categoria1SF
//         } else if(categoria === 2){
//             preco = categoria2SF
//         } else if (categoria === 3) {
//             preco = categoria3SF
//         } else if (categoria === 4) {
//             preco = categoria4SF
//         } else {
//             console.log('Inseriu o dado incorreto.')
//         }
//     }
//     // Laço para Terceiro Lugar
//     else if(etapaDoJogo == 'DT') {
//         etapaDoJogo = 'Disputa de Terceiro Lugar'
//         if(categoria === 1) {
//             preco = categoria1DT
//         } else if(categoria === 2){
//             preco = categoria2DT
//         } else if (categoria === 3) {
//             preco = categoria3DT
//         } else if (categoria === 4) {
//             preco = categoria4DT
//         } else {
//             console.log('Inseriu o dado incorreto.')
//         }
//     } 
//     // Laço para Final
//     else if(etapaDoJogo == 'FI') {
//         etapaDoJogo = 'Final'
//         if(categoria === 1) {
//             preco = categoria1FI
//         } else if(categoria === 2){
//             preco = categoria2FI
//         } else if (categoria === 3) {
//             preco = categoria3FI
//         } else if (categoria === 4) {
//             preco = categoria4FI
//         } else {
//             console.log('Inseriu o dado incorreto.')
//         }
//     } else {
//         console.log('Inseriu o dado incorreto.')
//     }
//     // Saída do jogo nacional
//     console.log(`
//     ---- DADOS DA COMPRA ---- \n
//     Nome do Cliente: ${nomeCompleto} \n
//     Tipo de Jogo: ${tipoDeJogo} \n
//     Etapa do Jogo: ${etapaDoJogo} \n
//     Categoria: ${categoria} \n
//     Quantidade de Ingressos: ${quantidadeIngresso} ingressos. \n
//     ---- VALOR ---- \n
//     Valor do Ingresso: R$${preco} \n
//     Valor Total: R$${Math.round(preco * quantidadeIngresso)}`)
    
// }

// // Jogo Internacional
// else if (tipoDeJogo === 'IN') {
//     tipoDeJogo = 'Internacional'
//     // Laço pra Semi-Final
//     if(etapaDoJogo === 'SF') {
//         etapaDoJogo = 'Semi-Finals'
//         if(categoria === 1) {
//             preco = Math.round(categoria1SF / 4.10)
//         } else if(categoria === 2){
//             preco = Math.round(categoria2SF / 4.10)
//         } else if (categoria === 3) {
//             preco = Math.round(categoria3SF / 4.10)
//         } else if (categoria === 4) {
//             preco = Math.round(categoria4SF / 4.10)
//         } else {
//             console.log('Inseriu o dado incorreto.')
//         }
//     }
//     // Laço para Terceiro Lugar
//     else if(etapaDoJogo == 'DT') {
//         etapaDoJogo = 'Third Place Competing'
//         if(categoria === 1) {
//             preco = Math.round(categoria1DT / 4.10)
//         } else if(categoria === 2){
//             preco = Math.round(categoria2DT / 4.10)
//         } else if (categoria === 3) {
//             preco = Math.round(categoria3DT / 4.10)
//         } else if (categoria === 4) {
//             preco = Math.round(categoria4DT / 4.10)
//         } else {
//             console.log('Inseriu o dado incorreto.')
//         }
//     } 
//     // Laço para Final
//     else if(etapaDoJogo == 'FI') {
//         etapaDoJogo = 'Finals'
//         if(categoria === 1) {
//             preco = Math.round(categoria1FI / 4.10)
//         } else if(categoria === 2){
//             preco = Math.round(categoria2FI / 4.10)
//         } else if (categoria === 3) {
//             preco = Math.round(categoria3FI / 4.10)
//         } else if (categoria === 4) {
//             preco = Math.round(categoria4FI / 4.10)
//         } else {
//             console.log('Inseriu o dado incorreto.')
//         }
//     }   

//     else {
//         console.log('Inseriu o dado incorreto.')
//     }

//     // Saída jogo internacional.
//     console.log(`
//     ---- PURCHASE INFO ---- \n
//     Client Name: ${nomeCompleto} \n
//     Game Type: ${tipoDeJogo} \n
//     Game Stage: ${etapaDoJogo} \n
//     Category: ${categoria} \n
//     Ticket Amount: ${quantidadeIngresso} tickets. \n
//     ---- PRICE ---- \n
//     Ticket Price U$${preco} \n
//     Total Price: U$${Math.round(preco * quantidadeIngresso)}`)
// } 

// else {
//     console.log('Inseriu o dado incorreto.')
// }


// EXERCICIOS DE LOOPS OU LAÇOS

//EXERCICIO 1 DE INTERPRETAÇÃO DE CODIGO

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// ele executa uma série de processos até que o ultimo valor a ser somado na variavel seja <5
// ele soma o valor + o indice, resultado final é 10

//EXERCICIO 2 DE INTERPRETAÇÃO DE CODIGO

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//ele vai procurar na lista de numeros os numeros maiores que 18 e vai imprimir no console
// for of não acessa o indice da lista

//EXERCICIO 1 DE PRATICA DE ESCRITA

// a.
// let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80]

// for(let numero of arrayOriginal){
//   console.log(numero)
// }

//b.
// let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80]

// for(let numero of arrayOriginal){
//   console.log(numero / 10)
// }

// c.
// const arrayOriginal =  [30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novoArray = []
// for(let num of arrayOriginal) {
//     if(num % 2 === 0) {
//         novoArray.push(num)
//     }
// }
// console.log(novoArray)

// d.
// const arrayOriginal =  [30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novoArray = []
// for(let i = 0; i < arrayOriginal.length; i++) {
//     novoArray.push(`O elemento do index ${i} é ${arrayOriginal[i]}.`)
// }
// console.log(novoArray)

//e.
// const arrayOriginal =  [30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let maior = 0
// let menor = Infinity

//  for (let i = 0; i < arrayOriginal.length; i++) {
//      const elemento = arrayOriginal[i]
//      const elemento1= arrayOriginal[i]
//      if (elemento > maior) {
//         maior = elemento
//      } if (elemento1 < menor){
//      menor = elemento1
//     }
//  }
//  console.log(`O maior numero é ${maior} e o menor é ${menor}`)

// DESAFIOS

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//o resultado seriam 4 linhas e cada linha tem uma quantidade de 0 respectivo a linha correspondente, no caso
// 0
// 00
// 000
// 0000

// ****** EXERCICIOS DA AULA 13 FUNÇÕES

// *EXERCICIOS  1 DE INTERPRETAÇÃO DE TEXTO

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))


//** A. vai ser impresso no console o valor da multiplicação que é 10 e 50
// B. não acontece nada visivel no console, mas a função funciona.

// *EXERCICIOS  2 DE INTERPRETAÇÃO DE TEXTO

// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// A. o console imprime só os nomes < que o indice 2 do array, ou seja, Darvas e Goli
// B. se mudassemos o array pra Amanda e Caio e ele ia imprimir esses dois nomes no console pq são indice 0 e indice 1


// *EXERCICIOS  3 DE INTERPRETAÇÃO DE TEXTO

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }
  // essa função recebe um array e verifica se o resto da divisão de 2 é 0 se for ele das um push nesse elemento 
  // e coloca no arrayFinal, mas ele faz o elemento * ele mesmo e coloca no array, o nome desse função poderia ser 
  // verificaArray


  // ***** EXERCICIO DE ESCRITA 1

 //*****A.****
//   const meuEu = () => {
//       console.log("Oi meu nome é Michelle, tenho 22 anos e moro em Criciúma SC, sou estudante da Labenu!")
//   }

//****B.****
// const infosPessoais = (nome, idade, cidade, estudante) =>{
//     if (estudante === true){
//     console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou estudante.`)
//     }
//     else if(estudante === false) {
//     console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e não sou sou estudante.`)
//     }
// }

// const resultado = infosPessoais("Michelle", 22, "Criciuma", true)

 // ***** EXERCICIO DE ESCRITA 2

 //******A.****

//  const somaValores = (numero1, numero2) =>{
//      soma = numero1 + numero2
//      return soma
//  }
//  const resultado = somaValores(5, 6)
//  console.log(resultado)

//***** B. *****

// const verificaValor = (numero1, numero2) =>{
//     maior = numero1 >= numero2
//     return maior
// }
// const resultado = verificaValor(5, 2)
// console.log(resultado)

// **** C. ****
// function meuNome (string) {

//     for(let i = 0; i <= 10; i++){
//       meuNome += string
//     }
//     return meuNome
//     }
//     const resultado = meuNome(['Michelle'])


 // ***** EXERCICIO DE ESCRITA 3

 //**** A. *****

const array1 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// const tamanhoDoArray = (array) =>{
//   return array.length 
// }
// const resultado = tamanhoDoArray(array1)
// console.log(resultado)

// **** B. ****

// const numeroPar = (number) =>{
//   if(number%2 === 0){
//     return true
//   } else {
//     return false
//   }
// }

// let numeroDoUsuario = prompt("Digite um numero")
// const resposta = numeroPar(numeroDoUsuario)
// console.log(`O numero ${numeroDoUsuario} é par? Resposta: ${resposta}`)

// **** C. **** 

let arrayPar = []

function verificaArray(arrayDeParametro) {
    for (let elemento of arrayDeParametro) {
      if(elemento%2 === 0){
            arrayPar.push()    
      }
    }
    return arrayPar.length 
}

const resposta = verificaArray(array1)
console.log(resposta)