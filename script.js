document.addEventListener("DOMContentLoaded", () => {
    const palavras = ["programacao", "javascript", "html", "css", "github", "forca", "computador", "servidor"];
    const palavra = palavras[Math.floor(Math.random() * palavras.length)];

    const palavraDiv = document.getElementById("palavra");
    const letrasDiv = document.getElementById("letras");
    const mensagem = document.getElementById("mensagem");

    let tentativas = 6;
    let acertos = [];
    let erros = [];

    function atualizarPalavra() {
        const exibida = palavra.split("").map(l => acertos.includes(l) ? l : "_").join(" ");
        palavraDiv.textContent = exibida;
        if (!exibida.includes("_")) {
            mensagem.textContent = "🎉 Você venceu!";
        }
    }

    function verificar(letra) {
        if (palavra.includes(letra)) {
            acertos.push(letra);
        } else {
            erros.push(letra);
            tentativas--;
        }
        atualizarPalavra();
        if (tentativas <= 0) {
            mensagem.textContent = `💀 Você perdeu! A palavra era: ${palavra}`;
        }
    }

    function criarBotoes() {
        const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
        alfabeto.forEach(l => {
            const botao = document.createElement("button");
            botao.textContent = l;
            botao.addEventListener("click", () => {
                botao.disabled = true;
                verificar(l);
            });
            letrasDiv.appendChild(botao);
        });
    }

    atualizarPalavra();
    criarBotoes();
});
