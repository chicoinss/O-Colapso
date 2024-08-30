export const perguntas = [
    {
        enunciado: "Você encontra um caminho bifurcado. Para a esquerda, há um desfiladeiro sombrio; para a direita, uma floresta densa. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "Escolher o desfiladeiro sombrio",
                afirmacao: ["Você avança pela escuridão, sentindo a adrenalina...", "Uma brisa fria o faz arrepiar..."],
                proxima: 1
            },
            {
                texto: "Escolher a floresta densa",
                afirmacao: ["Você entra na floresta, sentindo o cheiro das árvores...", "Os galhos rangem acima de sua cabeça..."],
                proxima: 2
            }
        ]
    },
    {
        enunciado: "Ao atravessar o desfiladeiro, você vê uma ponte de corda à sua frente. O que você faz?",
        alternativas: [
            {
                texto: "Atravessar a ponte",
                afirmacao: ["Você pisa com cuidado, sentindo a ponte balançar...", "O abismo se abre abaixo de você..."],
                proxima: 3
            },
            {
                texto: "Descer pelo desfiladeiro",
                afirmacao: ["A descida é íngreme, mas você encontra uma rota segura...", "Você chega a uma gruta escondida..."],
                proxima: 4
            }
        ]
    },
];
