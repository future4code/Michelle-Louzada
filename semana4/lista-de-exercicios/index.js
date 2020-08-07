//-------------------------EXERCICIOS DE INTERPRETAÇÃO DE TEXTO----------------------------------------

//-------------------------1---------------------------------

/* O código transfere o valor em dinheiro no valor da cotação do dolar informado pelo usuario pelo prompt
o usuario digita o valor da cotação e ele pega esse valor e faz vezes o valor em reais informado
no código quando chama a função em baixo, esse valor ele guarda numa constante ''meuDinheiro" e
depois da um console.log na constante imprimindo o valor de 100 dolares vezes a cotação.*/

//-------------------------2---------------------------------

/* A função ele tem como parametro o tipo de investimento e o valor, depois ele abre um switch case pra avaliar
cada caso pra calcular o valor de juros do investimento dependendo do tipo dele, caso o investimento não se 
enquadra nos tipos do switch o usuario recebe um alert informando, no final ele retorna esse valor e guarda numa variavel
então ele chama a função passando valores de paramentro e da um console.log pra imprimir na tela
impresso na tela : 1ª (165,00) e 2ª um alert informando "TIPO DE INVESTIMENTO INFORMADO INCORRETO"*/

//-------------------------3---------------------------------

/* Primeiro o código cria 3 tipos de array, um com numeros e os outros dois vazios, logo a baixo ele cria um laço de
for of onde vai varrer todo o array de numeros e se o numero a divisão dele por 2 o resto for igual a 0 ele adiciona
o numero no array1, caso ao contrario ele adiciona o array2. Depois da um console log no tamanho dos 3 arrays.
impresso tela: 1ª (Quantidade total de números 14 ) 
2ª (6)
3ª(8)*/

//-------------------------4---------------------------------

/* primeiro o código é um array composto de numeros inteiros e negativos, abaixo duas variaveis, uma guarda o valor de
infinito e outra o valor de 0, abaixo um laço de for of que varre o array para encaixar na condição dos if's, 
o primeiro if diz que o numero do array for menor que infinito a variavel vai possuir aquele valor, e o segundo if
pede que o numero seja maior que 0 ele atribui esse valor, isso é feito pra achar o maior e o menor valor do array de numeros
logo um console log nessas variaveis 
imprime na tela: 1ª (1590) 2ª(-10)

//---------------------EXERCICIOS DE LÓGICA DE PROGRAMAÇÃO-----------------------------------

//-------------------------1---------------------------------

/* 3 maneiras para percorrer uma lista é usando o while, for, for of.

------while-----

let i = 0
while (1 < 10) {
    console.log(i)

    i++
}

---- for -----

for(let i = 0; i < 10; i++){
    console.log(i)
}

---- for of ----

const array = [1, 5, 3, 98, 50]
let maior = 0
for(let numero of array) {
    if(numero > maior){
        maior = numeros
    }
}*/

//-------------------------2---------------------------------
/*
------a.-----
false

-----b.----
false ou false = false

-----c.----
true && true = true

-----d.-----
!false ou !true = true

----e.-----
!true && !true ou false = false*/

//-------------------------3---------------------------------
/* não funcionava antes por que faltava um numero na const declarada e por que faltava incremento, tambem alterei valor de <= para só <

const quantidadeDeNumerosPares = 5
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  
  i++
  
}*/

//-------------------------4---------------------------------
/*
function classificarTriangulo (a, b, c) {
    if (a === b && a === c && b === c){
    console.log("Equilátero")
    }else if(a === b || a === c || b === c){
        console.log("isosceles")
    }else if (a !== b && a !== c && b !== c) {
        console.log("Escaleno")
    }

}
const triangulo = classificarTriangulo(10, 10, 10)*/

//-------------------------5---------------------------------
/*
let maior = 0
let subtração = 0

function operaçõesMaior (numero1, numero2){
    if(numero1 > numero2){
    maior = numero1
    }else{
        maior = numero2
    }console.log(`O maior número é: ${maior}`)
    
    if (numero1 % numero2 ===  0){
   console.log(`${numero1} é divisível por ${numero2}`)
    } else if (numero2 % numero1 === 0){
        console.log(`${numero2} é divisível por ${numero1}`)
    }
    if(numero1 % numero2 !== 0){
    console.log(`${numero1} não é divisível por ${numero2}`)
    } 
    if (numero2 % numero1 !== 0){
    console.log(`${numero2} não é divisível por ${numero1}`)
    }
    if(numero1 >= numero2){
    subtração = numero1 - numero2
    console.log(`A diferença entre eles é ${subtração}`)
    }else if (numero2 >= numero1){
    subtração = numero2 - numero1
    console.log(`A diferença entre eles é ${subtração}`)
}}

const resultado1 = operaçõesMaior(50, 100)*/