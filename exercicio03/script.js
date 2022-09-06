document.querySelector("#input").onchange = (e) => {
    var age = getAge(e.target.value);
    var p = document.createElement("p")
    document.querySelector("#age").innerText = `${age} anos`;
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