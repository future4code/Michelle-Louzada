type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a) eu escreveria um comando no packpage.json pra rodar o arquivo exercicio-4
// tipo assim : "exercicio4": "clear && echo && tsc && node ./build/exercicio-4.js"

//B) sim seria diferente, assim : "exercicio4": "clear && echo && tsc && node ./src/exercicio-4.js"

//c) sim, usando comando tsc no terminal ele transpila todos os arquivos com .ts 

//d) mudou que algumas propriedades a gente descomentou do arquivo, como sourceMap; 
// outDir; rootDir; removeComments; noImplicitAny fora o target mudou o valor para: "es6"