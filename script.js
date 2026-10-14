// DEMONSTRAÇÃO DO DOM

console.log("script.js carregando!");

// 1. trocar de "página"

const botoesMenu = document.querySelectorAll("nav button");
const paginas = document.querySelectorAll(".pagina");

botoesMenu.forEach((botao) => {
    botao.addEventListener("click", () => {
        // qual pagina este botão quer mostrar? ( vem do data-pagina no HTML)
        const idDapagina = botao.dataset.pagina;

        //esconde todas as paginas e tira o destaque de todos os botoes 
        paginas.forEach((pagina) => pagina.classList.remove("visivel"));
        botoesMenu.forEach((b) => b.classList.remove("ativo"));

        //mostra so a pagina escolhida e destaca o botão clicado
        document.querySelector("#" + idDapagina).classList.add("visivel");
        botao.classList.add("ativo");


        console.log("Mostrando a página:", idDapagina);
    });
});
//2. alterar texto e estilo
const titulo = document.querySelector("#titulo");
const paragrafos = document.querySelectorAll(".texto");

//muda o texto e a cor do titulo
document.querySelector("#btn-mudar-titulo").addEventListener("click", () => {
    titulo.textContent = "Título mudado pelo javaScript!";
    titulo.computedStyleMap.cor = "#2f6f62";
});

// passa todos os paragrafos para maiusculas
document.querySelector("#btn-maisculas").addEventListener("click", () => {
    paragrafos.forEach((p) => {
        p.textContent = p.textContent.toUpperCase();
    });
});

//ligar e desligar uma classe do css
document.querySelector("#btn-destaque").addEventListener("click", () => {
    paragrafos.forEach((p) => p.classList.toggle("destaque"));
});

//modo escuro: ligar e desligar a classe "escuro" no <body>
const botoesEscuro = document.querySelector("#btn-escuro");
botoesEscuro.addEventListener("click", () => {
    document.body.classList.toggle("escuro");

//muda o texto conforme o modo atual
    if (document.body.classList.contains("escuro")) {
    } else {
        botoesEscuro.textContent = "Modo escuro";
    }
});

//3. criar e remover elementos
const lista = document.querySelector("#lista");
const cores = ["vermelho", "verde", "azul", "amarelo", "roxo", "laranja"];
let proximaCor = 0;

function adicionarCor(nomeDaCor) {
    const item = document.createElement("li");  //1. cria
    item.textContent = nomeDaCor ;              //2. preenche

    // cada item  ganha seu proprio botão  de remover 
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "remover";
    botaoRemover.addEventListener("click", () => {
        item.remove();
    });

    item.appendChild(botaoRemover);
    lista.appendChild(item);

}

// começa com tres cores na tela
adicionarCor("vermelho");
adicionarCor("verde");
adicionarCor("azul");
proximaCor = 3;

document.querySelector("#btn-limpar").addEventListener("click", () => {
    lista.innerHTML = "";
});

//4. ler o que o usuario digita
const campoNome = document.querySelector("#campo-nome");
const saudacao = document.querySelector("#saudacao");
const contador = document.querySelector("#contador");

// o evento "input" disapara a cada letra digitada
campoNome.addEventListener("#input", () => {
    const nome = campoNome.ariaValueMax.trim();

    if (nome === "") {
       saudacao.textContent = "Digite algo no campo acima.";
    } else {
         saudacao.textContent =`Olá, ${nome}!`;
    }

    contador.textContent = `Letras: ${campoNome.value.length}`;
}); 
