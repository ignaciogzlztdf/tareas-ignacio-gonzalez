import { Libro } from "./Libro";

export class GestorLibros {
  private listadoDeLibros:Libro[];

  constructor(arregloDeLibros:Libro[]){
    this.listadoDeLibros = arregloDeLibros;
  }

  public obtenerListadoDeLibros():Libro[]{
    return this.listadoDeLibros;
  }
  public insertarLibro(libro:Libro):string{
    this.listadoDeLibros.push(libro);
    return "El libro se ha añadido con éxito";
  }
  public consultarLibro(libro:Libro):string{
    let tituloDeLibro:string = libro.obtenerTitulo();
    let posicion:number = -1;
    for(let i:number = 0; i < this.listadoDeLibros.length; i++){
      if (this.listadoDeLibros[i].obtenerTitulo() === tituloDeLibro){
        posicion = i;
      }
    }
    if (posicion === -1){
      return "No está registrado";
    } else {
      return "El libro está registrado en la posición "+ posicion;
    }
  }
  public modificarLibro(posicion:number,autor:string,titulo:string):string{
    this.listadoDeLibros[posicion].setearAutor(autor);
    this.listadoDeLibros[posicion].setearTitulo(titulo);
    return "Datos actualizados con éxito"
  }
  public eliminarLibros(libro:Libro){
    let tituloDeLibro:string = libro.obtenerTitulo();

    for(let i:number = 0; i < this.listadoDeLibros.length; i++){
      if (this.listadoDeLibros[i].obtenerTitulo() === tituloDeLibro){
        this.listadoDeLibros.splice(i, 1);
      }
    }
    return "El libro se ha eliminado con éxito";
  }
}