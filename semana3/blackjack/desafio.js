/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
 

if(confirm("Quer iniciar uma nova rodada?")) {
  
  let carta1 = comprarCarta();
  let carta2 = comprarCarta();
  let carta3 = comprarCarta();
  let carta4 = comprarCarta();
  let novaCarta = []
  
   if(carta1 && carta2 === "A"){
   carta1 = comprarCarta();
   carta2 = comprarCarta();
   }
   else if(carta3 && carta4 === "A"){
   carta3 = comprarCarta();
   carta4 = comprarCarta();
}
confirm(
   `Suas cartas são ${carta1.texto} ${carta2.texto}. A carta revelada do computador é ${carta3.texto}. 
    \n  
	Deseja comprar mais uma carta?`
)






  const valorUsu = carta1.valor + carta2.valor
  const valorPc = carta3.valor + carta4.valor
  
  console.log("Usuário - cartas:", carta1.texto, carta2.texto, "- Pontuação", valorUsu)
  console.log("Computador - cartas:", carta3.texto, carta4.texto, "-Pontuação", valorPc)

  if(valorUsu === valorPc){
     console.log("Empate!")
  }  else if(valorUsu > valorPc){
        console.log("O Usuário ganhou!")
  } else {
     console.log("Computador ganhou!")
  }
}
  
else {
  console.log("O jogo acabou!")
}

