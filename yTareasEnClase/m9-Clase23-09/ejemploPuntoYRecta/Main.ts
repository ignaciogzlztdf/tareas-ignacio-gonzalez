import { Punto } from "./Punto"
import { Recta } from "./Recta"

let puntoA: Punto = new Punto(3,2);
let puntoB: Punto = new Punto(1,2);

let rectaAB: Recta = new Recta(puntoA,puntoB);

rectaAB.obtenerPuntoInicial().setearY(1);


console.log(rectaAB.toString());
console.log(rectaAB.calcularDistanciaEntrePuntos());