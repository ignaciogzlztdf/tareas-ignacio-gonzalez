var Perro = /** @class */ (function () {
    // Funcionalidades
    // Constructor
    function Perro(paramRaza, paramNombre, paramDueño, paramFechaNacimiento) {
        this.raza = paramRaza;
        this.nombre = paramNombre;
        this.dueño = paramDueño;
        this.fechaNacimiento = paramFechaNacimiento;
    }
    Perro.prototype.obtenerRaza = function () {
        return this.raza;
    };
    Perro.prototype.setearRaza = function (paramRaza) {
        this.raza = paramRaza;
    };
    Perro.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Perro.prototype.setearNombre = function (paramNombre) {
        this.raza = paramNombre;
    };
    Perro.prototype.obtenerDueño = function () {
        return this.dueño;
    };
    Perro.prototype.setearDueño = function (paramDueño) {
        this.raza = paramDueño;
    };
    Perro.prototype.obtenerFechaNacimiento = function () {
        return this.fechaNacimiento.toString();
    };
    Perro.prototype.setearFechaNacimiento = function (parametroFechaNacimiento) {
        this.fechaNacimiento = parametroFechaNacimiento;
    };
    Perro.prototype.obtenerEdad = function () {
        var hoy = new Date();
        return hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    };
    Perro.prototype.ladrar = function () {
        console.log("¡Guau!");
    };
    Perro.prototype.aullar = function () {
        console.log("¡Auuuuuu!");
    };
    return Perro;
}());
var fechaNacimiento = new Date("08-04-2021");
var luca = new Perro("Pastor Alemán", "Luca", "Ignacio González", fechaNacimiento);
luca.ladrar();
luca.aullar();
console.log("Fecha de nacimiento");
console.log(luca.obtenerFechaNacimiento());
console.log("Edad actual (en años)");
console.log(luca.obtenerEdad());
