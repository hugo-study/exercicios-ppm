document.querySelector("#input").onchange = (e) => {
    var result = Math.sqrt(e.target.value);
    console.log(result)
    document.querySelector("#number").innerText = result;
}
