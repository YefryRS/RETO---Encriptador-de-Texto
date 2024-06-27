let letraE = "enter";
let letraI = "imes";
let letraA = "ai";
let letraO = "ober";
let letraU = "ufat"

let palabraSinEncriptar = []
let palabraEncriptada = [];


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

let textoAEncriptar = document.getElementById("textoEncriptar");

textoAEncriptar.addEventListener("change",(e) => {
    return e
})

function encriptarPalabra() {
    palabraSinEncriptar = textoAEncriptar.value.split("");

    palabraSinEncriptar.forEach(letra => {
        switch (letra) {
            case "e":
                palabraEncriptada.push(letraE);
                break;
            case "i":
                palabraEncriptada.push(letraI);
                break;
            case "a":
                palabraEncriptada.push(letraA);
                break;
            case "o":
                palabraEncriptada.push(letraO);
                break;
            case "u":
                palabraEncriptada.push(letraU);
                break;
            default:
                palabraEncriptada.push(letra);
                break;
        }
    });

    let textoEncriptado = palabraEncriptada.join("");
    asignarTextoElemento("tituloMensaje", "");
    asignarTextoElemento("textoEncriptado", textoEncriptado);

    document.getElementById("boton_copiar").removeAttribute("disabled")
    asignarTextoElemento("boton_copiar","Copiar")
}

function desencriptarPalabra() {
    palabraSinEncriptar = [];

    palabraEncriptada.forEach(letra => {
        switch (letra) {
            case letraE:
                palabraSinEncriptar.push("e");
                break;
            case letraI:
                palabraSinEncriptar.push("i");
                break;
            case letraA:
                palabraSinEncriptar.push("a");
                break;
            case letraO:
                palabraSinEncriptar.push("o");
                break;
            case letraU:
                palabraSinEncriptar.push("u");
                break;
            default:
                palabraSinEncriptar.push(letra);
                break;
        }
    });

    let textoDesencriptado = palabraSinEncriptar.join("");
    asignarTextoElemento("tituloMensaje", "");
    asignarTextoElemento("textoEncriptado", textoDesencriptado);
}

/* function copiarPalabra() {
    let textoCopiado = document.getElementById("textoEncriptado")
    console.log(textoCopiado)
} */

function copiarPalabra() {
    let textoCopiado = document.getElementById("textoEncriptado").innerText;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        console.log('Texto copiado al portapapeles: ', textoCopiado);
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
