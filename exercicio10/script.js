document.querySelector("#forms").addEventListener('submit', (e) => {
    e.preventDefault();
    const planeta = new Number(document.querySelector("#planeta").value);
    const peso = new Number(document.querySelector("#peso").value);
    console.log(planeta)
    console.log(Number.isNaN(planeta.valueOf()))
    if(!Number.isNaN(planeta.valueOf()) && !Number.isNaN(peso.valueOf())) {
        var result = (peso / 10) * planeta;
        var resultFormat = Math.round(result * 100) / 100
        document.querySelector("#result").innerText = `Resultado: ${resultFormat}`;
    }
})

document.querySelector("#limpar").onclick = (e) => {
    document.querySelector("#planeta").value = 'default';
    document.querySelector("#peso").value = '';
    document.querySelector("#result").innerText = 'Resultado:';
}