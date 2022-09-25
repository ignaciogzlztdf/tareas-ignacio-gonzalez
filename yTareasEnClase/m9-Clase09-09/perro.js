// Representación de mi objeto - Perro
// | Planteo simple |
// Perro
// Funciones
// Ladrar
// Aullar
// Obtener raza
// Estado
// Raza
// Nombre
// Dueño
// Edad
// | Planteo con terminología para usar en código |
// Perro
// Funciones
// ladrar()
// aullar()
// obtenerRaza()
// Estado (variables/constantes)
// raza
// nombre
// dueño
// edad
// | Pseudocódigo |
// Perro
// Estado (variables/constantes)
// raza: string
// nombre: string
// dueño: string
// edad: number
// Funciones
/*ladrar(){
  console.log("¡Guau!");
}*/
/*aullar(){
  console.log("¡Auuuuuu!");
}*/
/*obtenerRaza(){
  console.log(this.raza);
}*/
var Perro = /** @class */ (function () {
    // Funcionalidades
    // Constructor
    function Perro(raza, nombre, dueño, edad) {
        this.raza = raza;
        this.nombre = nombre;
        this.dueño = dueño;
        this.edad = edad;
    }
    Perro.prototype.ladrar = function () {
        console.log("¡Guau!");
    };
    Perro.prototype.aullar = function () {
        console.log("¡Auuuuuu!");
    };
    Perro.prototype.obtenerRaza = function () {
        console.log(this.raza);
    };
    return Perro;
}());
var luca = new Perro("Pastor Alemán", "Luca", "Ignacio González", 1);
luca.ladrar();
luca.aullar();
luca.obtenerRaza();
