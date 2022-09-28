"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.obtenerX = function () {
        return this.x;
    };
    Punto.prototype.setearX = function (x) {
        this.x = x;
    };
    Punto.prototype.obtenerY = function () {
        return this.y;
    };
    Punto.prototype.setearY = function (y) {
        this.y = y;
    };
    Punto.prototype.toString = function () {
        return "[" + this.x + ", " + this.y + "]";
    };
    return Punto;
}());
exports.Punto = Punto;
