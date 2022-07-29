// función para cargar nombre de alumno y validarlo
function cargarYValidarAlumno(): string {
  // inicializo variable alumno
  let alumno: string | null;
  while (true) {
    alumno = prompt("Ingrese el nombre completo del alumno.");
    /* chequeo si se ingresó un valor "" o un null
    y obligo a que se ingrese un string diferente a "" para salir 
    del bucle while */
    if (alumno === "" || alumno === null) {
      alert("Ingrese un nombre válido.");
    } else {
      return alumno;
    }
  }
}

/* función que almacena las notas y calcula el promedio anual,
retorna el promedio anual a través de una función anidada */

function guardarNotasEnArregloYCalcularPromedioAnual(): number {
  // inicializo el arreglo para las notas
  let notas: number[] = new Array(3);
  for (let indice: number = 0; indice < 3; indice++) {
    notas[indice] = Number(prompt("Ingrese la nota del cuatrimestre " + (indice + 1) + "."));
  }
  // una vez que guardé las notas en un arreglo,
  // lo utilizo para calcular el promedio anual
  // en la función anidada
  function calcularPromedioAnual(): number {
    let indice: number;
    let contador: number = 0;
    for (indice = 0; indice < 3; indice++) {
      contador = contador + notas[indice];
    }
    let calculoPromedioAnual: number = contador / indice++;
    // utilizo el método .toFixed(2) para que solo se muestren 2 decimales
    let promedioAnual: number = Number(calculoPromedioAnual.toFixed(2));
    // retorno el resultado del cálculo
    return promedioAnual
  }
  // retorno la función anidada que contiene el resultado del cálculo
  return calcularPromedioAnual();
}
// por consola muestro un texto descriptivo
// y llamo a las funciones dentro de él
console.log("El promedio anual del/la alumno/a " + cargarYValidarAlumno() + " es " + guardarNotasEnArregloYCalcularPromedioAnual());