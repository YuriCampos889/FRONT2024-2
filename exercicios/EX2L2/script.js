document.getElementById("verificarBotao").addEventListener("click", function() {
    const numero = parseInt(document.getElementById("numeroInput").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerText = "Por favor, insira um número válido.";
    } else if (numero % 2 === 0) {
        resultado.innerText = "O número " + numero + " é par.";
    } else {
        resultado.innerText = "O número " + numero + " é ímpar.";
    }
});
