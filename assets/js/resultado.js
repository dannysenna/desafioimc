

document.getElementById("nome").innerText = localStorage.getItem("nome");
document.getElementById("sexo").innerText = localStorage.getItem("sexo");
document.getElementById("idade").innerText = localStorage.getItem("idade");
document.getElementById("altura").innerText = localStorage.getItem("altura");
document.getElementById("peso").innerText = localStorage.getItem("peso");
document.getElementById("imc").innerText = localStorage.getItem("imc");
document.getElementById("categoria").innerText = localStorage.getItem("categoria");
document.getElementById("imcDesejavel").innerText = localStorage.getItem("imcDesejavel");
document.getElementById("risco").innerText = localStorage.getItem("risco");
document.getElementById("recomendacao").innerText = localStorage.getItem("recomendacao");


localStorage.clear();

function voltar() {
    window.location.href = "/assets/html/index.html";
}
