"use strict";
exports.__esModule = true;
exports.Recta = void 0;
var Recta = /** @class */ (function () {
    function Recta(puntoInicial, puntoFinal) {
        this.puntoInicial = puntoInicial;
        this.puntoFinal = puntoFinal;
    }
    Recta.prototype.obtenerPuntoInicial = function () {
        return this.puntoInicial;
    };
    Recta.prototype.setearPuntoInicial = function (puntoInicial) {
        this.puntoInicial = puntoInicial;
    };
    Recta.prototype.obtenerPuntoFinal = function () {
        return this.puntoFinal;
    };
    Recta.prototype.setearPuntoFinal = function (puntoFinal) {
        this.puntoFinal = puntoFinal;
    };
    Recta.prototype.calcularDistanciaEntrePuntos = function () {
        var Ax = this.puntoInicial.obtenerX();
        var Ay = this.puntoInicial.obtenerY();
        var Bx = this.puntoFinal.obtenerX();
        var By = this.puntoFinal.obtenerY();
        var ejeX = Bx - Ax;
        var ejeY = By - Ay;
        ejeX = ejeX * ejeX;
        ejeY = ejeY * ejeY;
        return Math.sqrt(ejeX + ejeY);
    };
    // Podría calcular la inclinación
    Recta.prototype.toString = function () {
        return this.puntoInicial.toString() + " , " + this.puntoFinal.toString();
    };
    return Recta;
}());
exports.Recta = Recta;
