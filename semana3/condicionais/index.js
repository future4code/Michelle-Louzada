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
