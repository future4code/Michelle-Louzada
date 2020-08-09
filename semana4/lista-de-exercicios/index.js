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

//--------------------------EXERCICIOS DE FUNÇÃO--------------------------------------

//-------------------------1---------------------------------

/*
const arrayNumeros = [20, 90, 45, 463, 27, 69, 12, 46]

function segundoMaior(array) {

    let maior = array[0]
    let menor = array[0]

    for(let i = 0; i < array.length; i++) {
        if(array[i] > maior) {
            maior = array[i]
        }
    }

    const novoArray = array.filter((elemento) => {
        return elemento !== maior
    })

    let segundoMaior = novoArray[0]

    novoArray.forEach((elemento) => {
        if(elemento > segundoMaior) {
            segundoMaior = elemento
        }
    })
    
    console.log(`O segundo maior número do array é ${segundoMaior}`)
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] < menor) {
            menor = array[i]
        }
    }

    const novoArray2 = novoArray.filter((elemento) => {
        return elemento !== menor
    })

    let segundoMenor = novoArray2[0]

    novoArray2.forEach((elemento) => {
        if(elemento < segundoMenor) {
            segundoMenor = elemento
        }
    })

    console.log(`O segundo menor número do array é ${segundoMenor}`)

}  


segundoMaior(arrayNumeros)
*/

//-------------------------2---------------------------------

//  const naoNomeada = () => {
//     alert("Hello Future4")
// }

// function alerta() {
//     naoNomeada()
// }

// alerta()

 //--------------------------EXERCICIOS DE OBJETOS-------------------------------

 //------------------1---------------------

 /* objetos são como se fosse uma caixa com divisórias que guarda um valor de determinada coisa.
 o array de objetos é bom utilizar pra guardar esses objetos que podem ser informações do usuario.*/

 //------------------2---------------------
/*
 function criaRetangulo (lado1, lado2){
    
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }
    return retangulo
 }
 const resultado = criaRetangulo(10, 15)
 console.log(resultado)*/

 //------------------3---------------------
/*
 const filme = {
     nome: "Interstellar",
     ano: 2014,
     diretor: "Christopher Nolan",
     atores: ["Matthew McConaughey", " Anne Hathaway"]
 }
 console.log(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`)
 */

 //------------------4---------------------
/*
 const pessoaAnonima = {
     nome: "Michelle",
     idade: 22,
     email: "hinatah.louz@gmail.com",
     endereço: "Cricuma/SC"
 }
 function anonimizarPessoa () {
    return pessoa2 = {
        ...pessoaAnonima,
        nome: 'ANONIMO'
        }
 }
 console.log(anonimizarPessoa()) */

 //----------------------EXERCICIOS DE FUNÇÕES COM ARRAY---------------------------

 //------------------1---------------------

 /* const array = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
] */

// a)
/* 
const idade = array.filter((elemento) => {
    return elemento.idade >= 20
})
// b)
const menorIdade = array.filter((elemento) => {
    return elemento.idade < 20
})

 */

 //------------------2---------------------

 // const exemploArray = [1, 2, 3, 4, 5, 6]

/* function multiplicados(array) {

    const arrayNovo = array.map((elemento) => {
        return elemento * 2
    })

    return arrayNovo
}


console.log(multiplicados(exemploArray))
 */


//  b)

/* function multiplicados(array) {

    const arrayNovo = array.map((elemento) => {
        return elemento * 3
    })

    return arrayNovo

}

console.log(multiplicados(exemploArray)) */

// c

/* function parOuImpar(array) {

    const arrayNovo = array.map((elemento) => {
        if(elemento % 2 === 0) {
            return `O número ${elemento} é par!`
        } 

        if(elemento % 2 !== 0) {
            return `O número ${elemento} é impar!`
        }
    })

    return arrayNovo

}

console.log(parOuImpar(exemploArray))
*/

 //------------------3---------------------
 
/* const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
] */

// a)

/* const pessoasPermitidas = pessoas.filter((elemento) => {
    return elemento.altura >= 1.5 && elemento.idade >= 14 && elemento.idade < 60
})
 */

// b)
/* const pessoasNaoPermitidas = pessoas.filter((elemento) => {
    return elemento.altura < 1.5 || elemento.idade < 15 || elemento.idade > 60
})

console.log(pessoasNaoPermitidas) */

 //------------------4---------------------
 /* const emails = consultas.map((elemento) => {

    if(elemento.cancelada === false) {

       if(elemento.genero === "masculino") {

           return `Olá, Sr. ${elemento.nome}. Estamos enviando esta mensagem para
           lembrá-lo da sua consulta no dia ${elemento.dataDaConsulta}. Por favor, acuse
           o recebimento deste e-mail.`
       } 
       
       if (elemento.genero === "feminino")

            return `Olá, Sra. ${elemento.nome}. Estamos enviando esta mensagem para
            lembrá-la da sua consulta no dia ${elemento.dataDaConsulta}. Por favor, acuse
            o recebimento deste e-mail.`
       }

       if(elemento.cancelada) {
           
           if(elemento.genero === "masculino") {
       
               return `Olá, Sr. ${elemento.nome}. Infelizmente, sua consulta marcada
               para o dia ${elemento.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
               contato conosco para remarcá-la`
           }
       
           if(elemento.genero === "feminino") {
       
               return `Olá, Sra. ${elemento.nome}. Infelizmente, sua consulta marcada
               para o dia ${elemento.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
               contato conosco para remarcá-la`
       
           }
       }
       
       })    

console.log(emails)

//------------------5---------------------
/* 
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

const contasAtualizadas = contas.forEach((elemento) => {

    // Declarando variável para a soma dos elmentos no array elemento.compras
    let soma = 0

    
    elemento.compras.forEach((elemento) => {
        soma += elemento
    }) 

    elemento.saldoTotal = elemento.saldoTotal - soma  
}
)
console.log(contas)
 */
