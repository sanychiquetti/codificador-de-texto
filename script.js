const textoInformado = document.querySelector("#textoInformado");
const noMessage = document.querySelector(".no-message");
const result = document.querySelector(".result");
const resultText = document.getElementById("resultText");
const btnCriptografar = document.querySelector("#encrypt");
const btnDescriptografar = document.querySelector("#decrypt");
const btnCopy = document.querySelector("#copy");

textoInformado.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
        e.preventDefault();
        alert("Digite apenas letras minúsculas e sem acento.");
    }
});

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-z]';
    
    if(char.match(pattern) || e.keyCode == 32 || e.keyCode == 13) {
        return true;
    }
}

function viewResult() {
    noMessage.style.display = "none";
    result.style.display = "flex";
}

function reset() {
    noMessage.style.display = "flex";
    result.style.display = "none";
    textoInformado.focus();
}

function encrypt() {

    viewResult();

    if(textoInformado.value != "") {
        textoInformado.value = textoInformado.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        resultText.textContent = textoInformado.value;
        textoInformado.value = "";
        textoInformado.focus();
    } 
    else {
        alert("Informe um texto para ser criptografado.");
        reset();
    }
    
}

btnCriptografar.onclick = encrypt;

function decrypt() {

    viewResult();

    if(textoInformado.value != "") {
        textoInformado.value = textoInformado.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        resultText.textContent = textoInformado.value;
        textoInformado.value = "";
        textoInformado.focus();
    } 
    else {
        alert("Informe um texto para ser descriptografado.");
        reset();
    }
    
}

btnDescriptografar.onclick = decrypt;

function copy() {
    navigator.clipboard.writeText(resultText.value);
    alert("Texto copiado para área de transferência.");
    reset();
}

btnCopy.onclick = copy;