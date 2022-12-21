const tocaOSom = (selectAudio) =>{
    const elemento = document.querySelector(selectAudio)

    if(elemento === null){
        throw new Error("Elemento não encontrado")
    }
    if(elemento != null && elemento.localName === "audio"){
        elemento.play()
    }

}

const listaTeclas = document.querySelectorAll(".tecla")