document.getElementById("display").value = 0;

var cantidad = "";
var recolector = 0;
var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;
var porcentajes = false;
var borrador_C = false;
var raiZ = false;
var potencias = false;
var contador = 0;

function numeros_calc(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}


function suma() {
    if (contador == 0) {
    recolector = recolector + parseInt(cantidad);
    } else {
        recolector = document.getElementById("display").value;
    }
    document.getElementById("display").value = recolector;
    cantidad = "";
    sumar = true;
    contador++;
}


function resta() {
    if (contador == 0) {
        recolector = recolector + parseInt(cantidad);
        } else {
            recolector = document.getElementById("display").value;
        }
        document.getElementById("display").value = recolector;
    cantidad = "";
    restar = true;
    contador++;
}


function multiplica() {
    if (contador == 0) {
        recolector = recolector + parseInt(cantidad);
        } else {
            recolector = document.getElementById("display").value;
        }
        document.getElementById("display").value = recolector;
    cantidad = "";
    multiplicar = true;
    contador++;
}


function division() {
    if (contador == 0) {
        recolector = recolector + parseInt(cantidad);
        } else {
            recolector = document.getElementById("display").value;
        }
        document.getElementById("display").value = recolector;
    cantidad = "";
    dividir = true;
    contador++;
}


function porcentaje() {
    if (contador == 0) {
        recolector = recolector + parseInt(cantidad);
        } else {
            recolector = document.getElementById("display").value;
        }
        document.getElementById("display").value = recolector;
    cantidad = "";
    porcentajes = true;
    contador++;
}


function borrador_c() {
    location.reload("display").value = "";
    cantidad = "";
    borrador_C = true;
}

function raiz() {
    if (contador == 0) {
        recolector = recolector + parseInt(cantidad);
        } else {
            recolector = document.getElementById("display").value;
        }
        document.getElementById("display").value = recolector;
    cantidad = "";
    raiZ = true;
    contador++;
}

function potencia() {
    if (contador == 0) {
        recolector = recolector + parseInt(cantidad);
        } else {
            recolector = document.getElementById("display").value;
        }
        document.getElementById("display").value = recolector;
    cantidad = "";
    potencias = true;
    contador++;
}


function igual() {
    if (sumar) {
        document.getElementById("display").value = recolector + parseInt(cantidad);
    } 
    if (restar) {
        document.getElementById("display").value = recolector - parseInt(cantidad);
    }
    if (multiplicar) {
        document.getElementById("display").value = recolector * parseInt(cantidad);
    }
    if (dividir) {
        document.getElementById("display").value = recolector / parseInt(cantidad);
    }
    if (porcentajes) {
        document.getElementById("display").value = recolector * parseInt(cantidad) / 100;
    }

    if (raiZ) {
        document.getElementById("display").value = Math.sqrt(recolector);
    }

    if (potencias) {
        document.getElementById("display").value = Math.pow(recolector, parseInt(cantidad));
    }

    if (borrador_C) {
        document.getElementById("display").value = recolector<-parseInt(cantidad);
    }

    

}
