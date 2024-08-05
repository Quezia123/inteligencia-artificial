const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O racismo é derivado de algo cultural ou historico?",
        alternativas: [
            "cultural",
            "historico"
        ]
    },
    {
        enunciado: "Qual é o papel da educação na luta contra o racismo?",
        alternativas: [
            "A educação é fundamental para concientizar as pessoas sobre as consequencias do rasismo",
            "Não é importante,pois a obrigação das escola é ensinar apenas a grade curricular"
        ]
    },
    {
        enunciado: "Como o racismo se manifesta no dia a dia?",
        alternativas: [
            "O racismo pode se manifestar atraves de comentarios ofencivos,brincadeiras,pequenas agressões,dificuldade de acesso a empregos ",
            "O racismo não se manifesta no dia adia"
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}