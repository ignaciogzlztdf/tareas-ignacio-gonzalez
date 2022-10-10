export class Libro {
  private autor:string;
  private titulo:string;

  constructor(autor:string,titulo:string){
    this.autor = autor;
    this.titulo = titulo;
  }
  public obtenerAutor():string{
    return this.autor;
  }
  public setearAutor(autor:string):void{
    this.autor = autor;
  }
  public obtenerTitulo():string{
    return this.titulo;
  }
  public setearTitulo(titulo:string):void{
    this.titulo = titulo;
  }
}