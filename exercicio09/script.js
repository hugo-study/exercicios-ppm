document.querySelector("#forms").addEventListener('submit', (e) => {
    e.preventDefault();
    const operacao = document.querySelector("#operacao").value;
    const nota01 = new Number(document.querySelector("#nota01").value);
    const nota02 = new Number(document.querySelector("#nota02").value);
    var result = 0;
    console.log(operacao)
    switch(operacao) {
        case 'soma':
            var result = nota01 + nota02;
            break;
        case 'subtracao':
            var result = nota01 - nota02;
            break;
        case 'multiplicacao':
            var result = nota01 * nota02;
            break;
        case 'divisao':
            var result = nota01 / nota02;
            break;
    }
    var resultFormat = Math.round(result * 100) / 100
    document.querySelector("#result").innerText = `Resultado: ${resultFormat}`;
})

document.querySelector("#limpar").onclick = (e) => {
    document.querySelector("#nota01").value = '';
    document.querySelector("#nota02").value = '';
    document.querySelector("#result").innerText = 'Resultado:';
}