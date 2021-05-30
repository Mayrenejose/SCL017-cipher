import cipher from './cipher.js';


console.log(cipher);


var div = document.getElementById("apple");
document.getElementById("hola").addEventListener("click", functionObtener);
function functionObtener() {
    document.getElementById("number").innerHTML = "Reciba un cordial saludo vecino, a continuacion debe ingresar palabra clave para generar codigo de acceso:";
    div.style.display = "";
}


var input = document.getElementById("originalWord")
input.addEventListener("keyup", function () {
    input.value = input.value.toUpperCase();
})

document.getElementById("encryptor").addEventListener("click", function () {
    var word = document.getElementById("originalWord").value;
    var Originaldisplace = document.getElementById("position").value;
    document.getElementById("outcome").innerHTML = cipher.encode(word, Originaldisplace);
});

document.getElementById("decrypt").addEventListener("click", function () {
    var word = document.getElementById("originalWord").value;
    var originalDisplace = document.getElementById("position").value;
    document.getElementById("outcome").innerHTML = cipher.decode(word, originalDisplace);
});



