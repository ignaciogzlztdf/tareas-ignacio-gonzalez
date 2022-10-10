import { GestorLibros } from "./GestorLibros";
import { Libro } from "./Libro";

// libros registrados
let libro1:Libro = new Libro("Robert C. Martin","Clean Code");
let libro2:Libro = new Libro("Andrew Hunt and David Thomas","The Pragmatic Programmer");
let libro3:Libro = new Libro("Donald Knuth","The Art of Computer Programming");
// nuevo libro
let libro4:Libro = new Libro("Marijn Haverbeke","Eloquent JavaScript");

let arregloDeLibros:Libro[] = [libro1,libro2,libro3]

let gestorDeLibros:GestorLibros = new GestorLibros(arregloDeLibros);

console.log(gestorDeLibros.obtenerListadoDeLibros());
console.log(gestorDeLibros.insertarLibro(libro4));
console.log(gestorDeLibros.obtenerListadoDeLibros());
console.log(gestorDeLibros.consultarLibro(libro4));
console.log(gestorDeLibros.modificarLibro(3,"David Herman","Effective JavaScript"));