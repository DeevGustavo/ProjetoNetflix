/* Document = HTML
 queryselector = Selecionar ou pegar um item do HTM
 addEventListener = (Ouvindo alguem e te contar quando algo acontecer*/

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-informacoes")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")





botaoSom.addEventListener("click", ligarSom)

function ligarSom(){
    video.muted = !video.muted
}

botao.addEventListener("click", mostrarModal)

function mostrarModal(){
    modal.style.display = "block"
    
}

modal.addEventListener("click", esconderModal)

function esconderModal(){
    modal.style.display = "none"
}
window.addEventListener("load", tocarAudio)

function tocarAudio(){
    audio.play()
}