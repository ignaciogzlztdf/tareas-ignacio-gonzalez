"use strict";
exports.__esModule = true;
var GestorLibros_1 = require("./GestorLibros");
var Libro_1 = require("./Libro");
// libros registrados
var libro1 = new Libro_1.Libro("Robert C. Martin", "Clean Code");
var libro2 = new Libro_1.Libro("Andrew Hunt and David Thomas", "The Pragmatic Programmer");
var libro3 = new Libro_1.Libro("Donald Knuth", "The Art of Computer Programming");
// nuevo libro
var libro4 = new Libro_1.Libro("Marijn Haverbeke", "Eloquent JavaScript");
var arregloDeLibros = [libro1, libro2, libro3];
var gestorDeLibros = new GestorLibros_1.GestorLibros(arregloDeLibros);
console.log(gestorDeLibros.obtenerListadoDeLibros());
console.log(gestorDeLibros.insertarLibro(libro4));
console.log(gestorDeLibros.obtenerListadoDeLibros());
console.log(gestorDeLibros.consultarLibro(libro4));
console.log(gestorDeLibros.modificarLibro(3, "David Herman", "Effective JavaScript"));
