document.getElementById("verificarBotao").addEventListener("click", function() {
    const idade = parseInt(document.getElementById("idade").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(idade) || idade < 0) {
        resultado.innerText = "Por favor, insira uma idade válida.";
    } else if (idade >= 18) {
        resultado.innerText = "Você pode acessar o site.";
    } else {
        resultado.innerText = "Desculpe, você não pode acessar o site.";
    }
});
