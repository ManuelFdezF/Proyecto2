

let resultado = document.getElementById("resultado");
let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let dividir = document.getElementById("dividir");
let multiplicar = document.getElementById("multiplicar");
let resetear = document.getElementById("resetear");
let igual = document.getElementById("igual");

let primernum;
let segundonum;
let operacion;


cero.addEventListener ("click", function(){
    resultado.textContent = resultado.textContent + "0"
})
uno.addEventListener ("click", function(){
    resultado.textContent = resultado.textContent + "1"
})
dos.addEventListener ("click", function(){
    resultado.textContent = resultado.textContent + "2"
})
tres.addEventListener ("click", function(){
    resultado.textContent = resultado.textContent + "3"
})
cuatro.addEventListener ("click", function(){
    resultado.textContent = resultado.textContent + "4"
})
cinco.addEventListener ("click", function(){
    resultado.textContent = resultado.textContent + "5"
})
seis.addEventListener ("click", function(){
    resultado.textContent = resultado.textContent + "6"
})
siete.addEventListener ("click", function(){
    resultado.textContent = resultado.textContent + "7"
})
ocho.addEventListener ("click", function(){
    resultado.textContent = resultado.textContent + "8"
})
nueve.addEventListener ("click", function(){
    resultado.textContent = resultado.textContent + "9"
})



resetear.addEventListener ("click", function(){
    resetear1();
})

sumar.addEventListener ("click", function(){
    primernum = resultado.textContent;
    operacion = "+";
    limpiar();
})
restar.addEventListener ("click", function(){
    primernum = resultado.textContent;
    operacion = "-";
    limpiar();
})
multiplicar.addEventListener ("click", function(){
    primernum = resultado.textContent;
    operacion = "*";
    limpiar();
})
dividir.addEventListener ("click", function(){
    primernum = resultado.textContent;
    operacion = "/";
    limpiar();
})


igual.addEventListener ("click", function(){
    segundonum = resultado.textContent;
    solucion();

})

function limpiar(){
    resultado.textContent = "";
}

function resetear1(){
    resultado.textContent = "";
    primernum = 0;
    segundonum = 0;
    operacion = "";
}

function solucion(){
    let resul = 0;
    switch (operacion){
        case "+":
            resul = parseFloat(primernum) + parseFloat(segundonum);
            break;
        case "-":
            resul = parseFloat(primernum) - parseFloat(segundonum);
            break;
        case "/":
            resul = parseFloat(primernum) / parseFloat(segundonum);
            break;
        case "*":
            resul = parseFloat(primernum) * parseFloat(segundonum);
            break;
    }
    resultado.textContent = resul;
    

}

