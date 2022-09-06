window.onload = function() {
    var numero = prompt("Digite um número?");

    if(isNaN(numero)) {
        alert("Não é um numero")
    } else if (numero % 2 == 1) {
        alert("Numero impar");
    } else {
        alert("Numero par");
    }
    
}
