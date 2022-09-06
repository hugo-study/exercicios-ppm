document.querySelector("#input").onchange = (e) => {
    var result = e.target.value * e.target.value;
    document.querySelector("#number").innerText = result;
}
