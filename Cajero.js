alert("Modificacion para prueba de git");
class Billete {

    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

var Caja = [];
var Entregado = [];
Caja.push(new Billete(50, 3));//150
Caja.push(new Billete(20, 2));//40
Caja.push(new Billete(10, 2));//20

var dinero;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", EntregarDinero);

var resultado = document.getElementById("resultado");


function EntregarDinero() {

    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    if (isNaN(dinero)) {

        alert("Ingrese la cantidad que quiere retirar");

    } else {


        for (var bi of Caja) {//recorremos el array caja
            if (dinero > 0) {
                div = Math.floor(dinero / bi.valor)
                if (div > bi.cantidad) {
                    papeles = bi.cantidad;
                } else {
                    papeles = div;
                }
                Entregado.push(new Billete(bi.valor, papeles));
                dinero = dinero - (bi.valor * papeles);
            }
        }

        if (dinero > 0) {
           alert("No tengo esa cantidad de dinero pero te entrego lo que hay");
            for (var e of Entregado) {
                if (e.cantidad>0) {
                    resultado.innerHTML += e.cantidad+" billestes de $ "+e.valor+"<br>";   
                }
            }
        } else {

            for (var e of Entregado) {
                if (e.cantidad>0) {
                    resultado.innerHTML +=  e.cantidad+" billestes de $ "+e.valor+"<br>";   
                }
            }
                alert("Sonido de cajero");
                alert("Favor retire su dinero");
                
        }

    }


}