document.querySelector("#input").onchange = (e) => {
    var age = getAge(e.target.value);
    var isAge = age >= 18
    var p = document.createElement("p")
    if(isAge)
        document.querySelector("#age").innerText = `É maior de idade`;
    else
        document.querySelector("#age").innerText = `É menor de idade`;
}

function getAge(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age
}