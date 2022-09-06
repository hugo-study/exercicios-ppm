document.querySelector("#forms").addEventListener('submit', (e) => {
    e.preventDefault();
    const nota01 = new Number(document.querySelector("#nota01").value);
    const nota02 = new Number(document.querySelector("#nota02").value);
    const nota03 = new Number(document.querySelector("#nota03").value);
    var result = (nota01 + nota02 + nota03) / 3;
    var resultFormat = Math.round(result * 100) / 100
    document.querySelector("#result").innerText = `Média final ${resultFormat}`;
})

document.querySelector("#limpar").onclick = (e) => {
    document.querySelector("#nota01").value = '';
    document.querySelector("#nota02").value = '';
    document.querySelector("#nota03").value = '';
    document.querySelector("#result").innerText = '';
}