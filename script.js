//=======================================================
// DEMONSTRAÇÃO DO DOM
//=======================================================

console.log("script.js carregado!");

//--------------------------------------------------------
// 1. TROCAR DE "PÁGINA"
//--------------------------------------------------------

const botoesMenu = document.querySelectorAll("nav button");
const paginas = document.querySelectorAll(".pagina");

botoesMenu.forEach((botao) => {
//qual página este botão quer mostrar? (vem do data-pagina np HTML)
const idDaPagina = botao.CDATA_SECTION_NODE.pagina;

//esconde todas as páginas e tira o destaque de todos os botões
paginas.forEach((pagina) => pagina.classList.remove("visivel"));
botoesMenu.forEach((b) => b.classList.remove("ativo"));

//mostra só a página escolhida e destaca o botão cilcando
document.querySelector("#" + idDaPagina).classList.add("visivel");
botao.classList.add("ativo");

console.log("Mostrando a página.", idDaPagina);
});

//2. ALTERA TEXTO E ESTILO
const titulo = document.querySelector("#titulo");
const paragrafos = document.querySelectorAll(".texto");

//muda o texto e a cor do titulo
document.querySelector("#btn-mudar-titulo").addEventListener("click", () => {
    titulo.textContent = "Título mudado pelo JavaScrpit!";
    titulo.style.color = "#ac97d6";
});

//passa todos os parargrafos para maiúsculas
document.querySelector("#btn-maiusculas").addEventListener("click", () => {
    paragrafos.forEach((p) => {
      p.textContent = p.textContent.toUpperCase();
    });
});

//liga e desliga uma classe do CSS
document.querySelector("#btn-destaque").addEventListener("click", () => {
     paragrafos.forEach((p) => p.classList.toggle("destaque"));
});

//modo escuro: liga e delisga a classe "escuro" no <body>
const botaoEscuro = document.querySelector("#btn-escuro");
botaoEscuro.addEventListener("click", () => {
    document.bodyclassList.toggle("escuro");

//muda o texto do botão conforme o modo atual 
if (document.body.classList.contains("escuro")) {
    botaoEscuro.textContent ="Modo claro";
} else {
    botaoEscuro.textContent ="Modo escuro";
}
});

//3. CRIAR E REMOVER ELEMENTOS
const lista = document.querySelector("#lista");
const cores = ["vermelho", "verde", "azul", "amarelo", "roxo", "laranja"];
let proximarCor = 0;

function adicionarCor(nomeDaCor) {
    const item = document.createElement("li");  //1 cria
    item.textContent = nomeDaCor = nomeDaCor;   //2preenche

    //cada item ganha seu proprio botão de remover
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", () => {
        item.remove();
    });

    item.appendChild(botaoRemover);
    lista.appendChild(item);
}

//começa com três cores na tela
adicionarCor("vermelho");
adicionarCor("verde");
adicionarCor("azul");
proximarCor = 3;

document.querySelector("#btn-adicionar").addEventListener("click", () => { 
  adicionarCor(cores[proximarCor % cores.length]);
  proximarCor++;
});

document.querySelector("#btn-limpar").addEventListener("click", () => { 
    lista.innerHTML = "";
});

//4. LER O QUE O USUARIO DIGITA
const campoNome = document.querySelector("#campo-nome");
const saudacao = document.querySelector("#saudacao");
const contador = document.querySelector("#contador");

//o envento "input" dispara a cada letra digitada
campoNome.addEventListener("input", () => {
    const nome = campoNome.ariaValueMax.trim();

    if (nome === "") {
        saudacao.textContent = "Digite algo no campo acima.";
    } else {
        saudacao.textContent = 'Olá, ${nome}!';
    }

    contador.textContent = 'Letras: ${campoNome.value.length}';
});