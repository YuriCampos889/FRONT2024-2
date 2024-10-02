let numeroDeCurtidas = 0;

document.getElementById("curtirBotao").addEventListener("click", function() {
    numeroDeCurtidas++;
    document.getElementById("curtidas").innerText = "Curtidas: " + numeroDeCurtidas;
});
