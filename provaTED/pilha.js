export function criarPilha(tamanhoDaPilha = 10) {
    return[...new Array(tamanhoDaPilha)]
}

export function inserirPilha(pilha, livro) {
    const spacePosition = pilha.indexOf(undefined)
    if(spacePosition === -1 ) {
        console.log("Não tem espaço na Pilha")
        return
    }
    pilha[spacePosition] = livro
}

export function retirarPilha(pilha, livro){
    if(pilha[0] === undefined) {
        console.log("Pilha de Livros Vazia")
        return
    }
    const ultimaPosicao = pilha.indexOf(undefined)
    const livroSelecionado = livro[ultimaPosicao-1]
    if(ultimaPosicao === -1){
        pilha.pop()
        return
    }
    pilha.splice(ultimaPosicao -1, 1, undefined)
    return livroSelecionado
}

export function verificaExistencia(pilha, tituloDoLivro){
    for (let i = 0; i < pilha.length; i++) {
        if(pilha[i] === tituloDoLivro){
            console.log("Livro Encontrado! " + tituloDoLivro.titulo)
            return
        }
        console.log("Livro Não Encontrado! " + tituloDoLivro.titulo)
            return
    }
}