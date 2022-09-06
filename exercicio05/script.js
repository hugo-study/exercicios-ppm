document.querySelector("#input").onchange = (e) => {
    var age = getAge(e.target.value);
    console.log(age)
    if(age <= 19)
        document.querySelector("#age").innerText = `Jovem`;
    else if (age <= 59)
        document.querySelector("#age").innerText = `Adulto`;
    else
        document.querySelector("#age").innerText = `Idoso`;
}

function getAge(birthdateString) {
    var today = new Date();
    var birthDate = new Date(birthdateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age
}