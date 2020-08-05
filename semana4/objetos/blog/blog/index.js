
let arrayDePosts = []
//capturando os valores dos elementos do html

const tituloPost = document.getElementById("titulo-post")
const autorPost = document.getElementById("autor-post")
const conteudoPost = document.getElementById("conteudo-post")
const imagemPost = document.getElementById("imagem-post")

//objeto

const postInteiro = {
    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value,
    imagem: imagemPost.value
}

//adiciona array
arrayDePosts.push(postInteiro)
i = 0

//imprime no console
console.log(postInteiro)
console.log(arrayDePosts)

//função que apaga op imputs
function apagaInput() {
    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""
    imagemPost.value = ""
}

//adiciona uma div no html com os posts
function adicionaPost() {
    const containerDePost = document.getElementById("container-de-posts")
    containerDePost.innerHTML += `<div><h1>${tituloPost.value}</h1> <h3>${autorPost.value}</h3> <p>${conteudoPost.value}</p></div>`
     if (imagemPost.value.includes('.png') || imagemPost.value.includes('.jpg')){
        containerDePost.innerHTML += `<img src=${imagemPost.value}>`
} else {
    alert ("Imagem não possui formato adequado ou nenhuma imagem adicionada")
}
apagaInput()
}
//função aperta o botão
function apertouBotao(evento){
    adicionaPost()
}
console.log(imagemPost)


