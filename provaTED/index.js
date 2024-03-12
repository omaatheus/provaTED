import { criarPilha, inserirPilha, retirarPilha, verificaExistencia } from "./pilha.js";

let livros = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
]

console.log(livros)

const pilha = criarPilha(10)

inserirPilha(pilha, {
    titulo: "Alice no País das Maravilhas",
    paginas: 224,
    genero: "clássico",
})
inserirPilha(pilha, {
    titulo: "Como Influenciar Pessoas",
    paginas: 150,
    genero: "auto-ajuda",
})

retirarPilha(pilha, {
    titulo: "Jason",
    paginas: 70,
    genero: "terror",

})

verificaExistencia(pilha, {
    titulo: "Do Mil ao Milhão",
    paginas: 50,
    genero: "Auto-Ajuda",
})

console.log(pilha)