//Exercicio 1

//a) minhaString fica sublinhado e acusa que é um tipo string e numero não vai
//funcionar;

// const minhaString: string = 43

//b) podemos usar o | pra atribuir mais tipos a varivél, com a sintese abaixo:

// let meuNumero: number | string = 45

// c) && d) && e)

// enum CORES_ARCO_IRIS {
//     VIOLETA = "Violeta",
//     ANIL = "Anil",
//     AZUL = "Azul",
//     VERDE = "Verde",
//     AMARELO = "Amarelo",
//     LARANJA = "Laranja",
//     VERMELHO = "Vermelho"
// }

// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: CORES_ARCO_IRIS
// }

// const pessoa1: pessoa = {
//     nome: "Michelle",
//     idade: 22,
//     corFavorita: CORES_ARCO_IRIS.VIOLETA
// }

// const pessoa2: pessoa = {
//     nome: "Carla",
//     idade: 25,
//     corFavorita: CORES_ARCO_IRIS.AMARELO
// }

// const pessoa3: pessoa = {
//     nome: "João",
//     idade: 33,
//     corFavorita: CORES_ARCO_IRIS.LARANJA
// }

// Exercicio 2

//a)

// function obterEstatisticas(numeros: number[] ) {

//     const numerosOrdenados: number[] = numeros.sort(
//         (a: number, b: number) => a - b
//     )

//     let soma: number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }
// console.log(obterEstatisticas([15, 12, 1, 19, 25, 3]))

//b) variavél numero[], ou seja, array de numeros, se eu tipar só como number
// no inicio preciso usar any pras funções de callback, mas se eu usar number[]
//direto como array ele já acha essas funções de callback;

//c) 

// const amostraDeIdades: {numeros: number[], obterEstatisticas: Function} = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros: number[]) => {
//         const numerosOrdenados: number[] = numeros.sort(
//             (a: number, b: number) => a - b
//         )
    
//         let soma: number = 0
    
//         for (let num of numeros) {
//             soma += num
//         }
    
//         const estatisticas: {maior: number, menor: number, media: number} = {
//             maior: numerosOrdenados[numeros.length - 1],
//             menor: numerosOrdenados[0],
//             media: soma / numeros.length
//         }
    
//         return estatisticas
//     }
//     }

//EXERCICIO 3

//a)

type post = 
    {
        autor: string,
        texto: string,
    }

const posts: post[]  = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

console.log(buscarPostsPorAutor(posts, "Severo Snape"))