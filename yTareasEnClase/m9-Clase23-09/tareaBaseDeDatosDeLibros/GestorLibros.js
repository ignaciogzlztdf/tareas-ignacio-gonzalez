"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
var GestorLibros = /** @class */ (function () {
    function GestorLibros(arregloDeLibros) {
        this.listadoDeLibros = arregloDeLibros;
    }
    GestorLibros.prototype.obtenerListadoDeLibros = function () {
        return this.listadoDeLibros;
    };
    GestorLibros.prototype.insertarLibro = function (libro) {
        this.listadoDeLibros.push(libro);
        return "El libro se ha añadido con éxito";
    };
    GestorLibros.prototype.consultarLibro = function (libro) {
        var tituloDeLibro = libro.obtenerTitulo();
        var posicion = -1;
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (this.listadoDeLibros[i].obtenerTitulo() === tituloDeLibro) {
                posicion = i;
            }
        }
        if (posicion === -1) {
            return "No está registrado";
        }
        else {
            return "El libro está registrado en la posición " + posicion;
        }
    };
    GestorLibros.prototype.modificarLibro = function (posicion, autor, titulo) {
        this.listadoDeLibros[posicion].setearAutor(autor);
        this.listadoDeLibros[posicion].setearTitulo(titulo);
        return "Datos actualizados con éxito";
    };
    GestorLibros.prototype.eliminarLibros = function (libro) {
        var tituloDeLibro = libro.obtenerTitulo();
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (this.listadoDeLibros[i].obtenerTitulo() === tituloDeLibro) {
                this.listadoDeLibros.splice(i, 1);
            }
        }
        return "El libro se ha eliminado con éxito";
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
