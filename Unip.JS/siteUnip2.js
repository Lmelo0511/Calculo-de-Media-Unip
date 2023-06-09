function calcularMedia() {
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var media = (n1 + n2) / 2;
    var resultado = document.getElementById("resultado");
    if (media >= 7) {
        resultado.textContent = "Parabéns, você está aprovado! Sua média semestral é de: " + media;}
    else {
        var n3 = parseFloat(document.getElementById("notaExame").value);
        var media2 = ((n1 + n2) / 2 + n3) / 2;
    if (media2 >= 5) {resultado2.textContent = "Você foi aprovado no exame! Sua média semestal é " + media2;
    } else {
        resultado.textContent = "Você está de DP(Dependência), Sua média semestral foi de: " + media2;
    }
    }
}
var nota2Input = document.getElementById("nota2");nota2Input.addEventListener("input", function() {
    var media = (parseFloat(document.getElementById("nota1").value) + parseFloat(this.value)) / 2;
    var exameDiv = document.getElementById("exameDiv");
if (media < 7) {
    exameDiv.style.display = "block";
} else {
    exameDiv.style.display = "none";
}});
    
// Função "Fazer Novo Cálculo"
function fazerNovoCalculo() {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("notaExame").value = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("resultado2").textContent = "";
    var exameDiv = document.getElementById("exameDiv");
    exameDiv.style.display = "none";
}
// Adicionar evento de clique ao botão "Fazer Novo Cálculo"
var novoCalculoButton = document.getElementById("novoCalculoButton");
novoCalculoButton.addEventListener("click", fazerNovoCalculo);
