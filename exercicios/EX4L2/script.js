function possuiHabilidade(habilidades) {
    return habilidades.includes("javascript");
}

const habilidades1 = ["html", "css", "javascript", "react"];
const habilidades2 = ["html", "css", "python"];

console.log(possuiHabilidade(habilidades1));
console.log(possuiHabilidade(habilidades2));
