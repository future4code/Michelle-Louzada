function adicionarItem() {
    const meuInput = document.getElementById("tarefa")
    let valorDoImput = meuInput.value
    const diasDaSemana = document.getElementById('dias-semana').value
    // const mySelect = document.getElementsByTagName("option")[diasDaSemana].value
	

    
    switch(diasDaSemana){
        // if (meuInput !== ""){
        case "domingo":
            const domingo = document.getElementById("domingo")
            domingo.innerHTML += `<p>${valorDoImput}</p>`
            break

        case "segunda":
            const segunda = document.getElementById("segunda") 
            segunda.innerHTML += `<p>${valorDoImput}</p>`
            break
        
        case "terca":
            const terca = document.getElementById("terca") 
            terca.innerHTML += `<p>${valorDoImput}</p>`
            break

        case "quarta":
            const quarta = document.getElementById("quarta") 
            quarta.innerHTML += `<p>${valorDoImput}</p>`
            break

        case "quinta":
            const quinta = document.getElementById("quinta") 
            quinta.innerHTML += `<p>${valorDoImput}</p>`
            break
            
        case "sexta":
            const sexta = document.getElementById("sexta") 
            sexta.innerHTML += `<p>${valorDoImput}</p>`
            break

        case "sabado":
            const sabado = document.getElementById("sabado") 
            sabado.innerHTML += `<p>${valorDoImput}</p>`
            break
        
        // } else{
        //     alert ("Nada preenchido!")
        // }
    }
  meuInput.value = ""
console.log
 }




    // switch (semana){
    //     case "Domingo":
    //         const minhaLista = document.getElementsByName("domingo")
    //         minhaLista.innerHTML += `<p>${valor}</p>`
    //         meuInput.value = ""
    //         console.log(minhaLista)
    //         break
    // }
