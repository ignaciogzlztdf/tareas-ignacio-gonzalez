// defino un ejemplo de arreglo para las butacas de una sala de cine
// que se recorrerá con el algoritmo
const EJ_11BUTACAS_DESOCUPADAS: boolean[] = [true, true, false, true, false, false, false, true, false, true, true, false, true, false, false, true, false, false, true, false];

// función para recorrer todas las butacas
// y devolver la cantidad de butacas desocupadas
function devolverCantidadButacasDesocupadas():string {
  let contadorButacasDesocupadas: number = 0;
  for (let indice: number = 0; indice < EJ_11BUTACAS_DESOCUPADAS.length; indice++) {
    if (EJ_11BUTACAS_DESOCUPADAS[indice] === false) {
      contadorButacasDesocupadas = contadorButacasDesocupadas + 1;
    }
  }
  return "En la sala de cine hay " + contadorButacasDesocupadas + " butacas desocupadas.";
}
console.log(devolverCantidadButacasDesocupadas());