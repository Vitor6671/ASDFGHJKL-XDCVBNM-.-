const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que a religião pode ajudar no combate à desigualdade social?",
        alternativas: [
            {
                texto: "Sim, por meio de ações de solidariedade e ajuda às pessoas mais necessitadas.",
                afirmacao: "A religião contribuiu para diminuir a desigualdade por meio da solidariedade."
            },
            {
                texto: "Sim, incentivando projetos sociais e o apoio às comunidades.",
                afirmacao: "A religião ajudou a sociedade por meio de projetos sociais e comunitários."
            }
        ]
    },

    {
        enunciado: "Você considera importante respeitar pessoas que possuem religiões diferentes da sua?",
        alternativas: [
            {
                texto: "Sim, porque todas as pessoas devem ser respeitadas independentemente de sua religião.",
                afirmacao: "O respeito às diferentes religiões contribuiu para uma sociedade mais inclusiva."
            },
            {
                texto: "Sim, porque a diversidade religiosa faz parte da sociedade.",
                afirmacao: "A diversidade religiosa fortaleceu a convivência entre diferentes grupos sociais."
            }
        ]
    },

    {
        enunciado: "Você acha que as religiões podem contribuir para combater a discriminação?",
        alternativas: [
            {
                texto: "Sim, ensinando valores como respeito, igualdade e solidariedade.",
                afirmacao: "Os valores religiosos ajudaram no combate à discriminação."
            },
            {
                texto: "Sim, promovendo a união e a convivência entre pessoas diferentes.",
                afirmacao: "A união entre diferentes grupos religiosos contribuiu para diminuir a discriminação."
            }
        ]
    },

    {
        enunciado: "Você acredita que instituições religiosas devem participar de ações sociais?",
        alternativas: [
            {
                texto: "Sim, ajudando pessoas em situação de pobreza e vulnerabilidade.",
                afirmacao: "As instituições religiosas ajudaram pessoas em situação de vulnerabilidade."
            },
            {
                texto: "Sim, oferecendo projetos de apoio, educação e assistência à comunidade.",
                afirmacao: "Projetos religiosos contribuíram para melhorar a vida das comunidades."
            }
        ]
    },

    {
        enunciado: "Você acredita que o diálogo entre diferentes religiões pode melhorar a convivência social?",
        alternativas: [
            {
                texto: "Sim, porque o diálogo ajuda a diminuir conflitos e preconceitos.",
                afirmacao: "O diálogo entre religiões ajudou a reduzir conflitos e preconceitos."
            },
            {
                texto: "Sim, porque permite que diferentes grupos conheçam e respeitem suas diferenças.",
                afirmacao: "O diálogo religioso promoveu maior respeito e compreensão entre os grupos."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacoes + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";
}

mostraPergunta();
