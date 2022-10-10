"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }
    Libro.prototype.obtenerAutor = function () {
        return this.autor;
    };
    Libro.prototype.setearAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.obtenerTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setearTitulo = function (titulo) {
        this.titulo = titulo;
    };
    return Libro;
}());
exports.Libro = Libro;
