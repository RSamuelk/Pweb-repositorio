alert("Bem-vindo ao Painel Acadêmico")

let contador = 0
let numeroFoto = 1


function atualizar(acao) {

    contador++

    document.getElementById("contadorAcoes").textContent = contador

    document.getElementById("ultimaAcao").textContent = acao
}



document.getElementById("btnAlterarNome").addEventListener("click", function () {

    document.getElementById("nomePerfil").textContent =
        "Geraldo o Bruxão"

    atualizar("Alteração de nome")
})



document.getElementById("btnAlterarCurso").addEventListener("click", function () {

    document.getElementById("cursoPerfil").textContent =
        "Curso: Malandragem e sacanagem."

    atualizar("Alteração de curso")
})



document.getElementById("btnAlterarFoto").addEventListener("click", function () {

    numeroFoto = numeroFoto + 1

    if (numeroFoto > 3) {
        numeroFoto = 1
    }

    document.getElementById("fotoPerfil").src =
        "imagens/perfil" + numeroFoto + ".jpg"

    atualizar("Alteração de foto")
})



document.getElementById("btnDestacarPerfil").addEventListener("click", function () {

    document.getElementById("perfil").classList.add("destaque")

    atualizar("Perfil destacado")
})



document.getElementById("btnRestaurar").addEventListener("click", function () {

    document.getElementById("nomePerfil").textContent =
        "Gerald de Rívia"

    document.getElementById("cursoPerfil").textContent =
        "Curso: Treinamento para caçar monstros"

    document.getElementById("fotoPerfil").src =
        "imagens/perfil1.jpg"

    numeroFoto = 1

    document.getElementById("perfil").classList.remove("destaque")

    document.body.classList.remove("temaEscuro")
    document.body.classList.remove("temaAzul")

    document.getElementById("tituloPagina").style.color = "black"

    atualizar("Perfil restaurado")
})




document.getElementById("temaSelect").addEventListener("change", function () {

    let tema = this.value

    document.body.classList.remove("temaEscuro")
    document.body.classList.remove("temaAzul")

    let titulo = document.getElementById("tituloPagina")

    if (tema == "claro") {
        titulo.style.color = "black"
    }

    if (tema == "escuro") {
        document.body.classList.add("temaEscuro")
        titulo.style.color = "lightblue"
    }

    if (tema == "azul") {
        document.body.classList.add("temaAzul")
        titulo.style.color = "darkblue"
    }

    atualizar("Tema alterado")
})




document.getElementById("fonteRange").addEventListener("input", function () {

    let tamanho = this.value

    document.getElementById("biografiaPerfil").style.fontSize =
        tamanho + "px"

    document.getElementById("valorFonte").textContent =
        tamanho + "px"

    atualizar("Fonte alterada")
})




document.getElementById("mostrarBio").addEventListener("change", function () {

    if (this.checked) {
        document.getElementById("biografiaPerfil").style.display = "block"
    }

    else {
        document.getElementById("biografiaPerfil").style.display = "none"
    }

    atualizar("Biografia alterada")
})




document.getElementById("btnAtualizarContato").addEventListener("click", function () {

    let email = document.getElementById("emailInput").value

    let telefone = document.getElementById("telefoneInput").value

    document.getElementById("emailExibido").textContent =
        "E-mail: " + email

    document.getElementById("telefoneExibido").textContent =
        "Telefone: " + telefone

    atualizar("Contato atualizado")
})