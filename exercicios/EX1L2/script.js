document.getElementById("verificarBotao").addEventListener("click", function() {
    const nota = parseFloat(document.getElementById("nota").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(nota) || nota < 0 || nota > 10) {
        resultado.innerText = "Por favor, insira uma nota válida entre 0 e 10.";
    } else if (nota >= 7) {
        resultado.innerText = "Parabéns, você foi aprovado!";
    } else {
        resultado.innerText = "Você foi reprovado.";
    }
});
