class Rectangulo {
  private base:number;
  private altura:number;
  constructor(paramBase:number,paramAltura:number){
    this.base = paramBase;
    this.altura = paramAltura;
  }
  public calcularArea():number{
    return this.altura * this.base;
  }
  public compararRectangulos():number{
    let areaDeRectangulo8x4:number = 32;
    if (this.calcularArea() === areaDeRectangulo8x4){
      return 0;
    } else if (this.calcularArea() > areaDeRectangulo8x4) {
      return 1;
    } else {
      return -1;
    }
  }
  public determinarSiEsUnCuadrado():boolean{
    if (this.base === this.altura){
      return true;
    } else {
      return false;
    }
  }
  public determinarSiEstaAcostadoOParado():string{
    if (this.determinarSiEsUnCuadrado() === true){
      return "No está ni acostado ni parado, todos sus lados son iguales, por lo que es un cuadrado";
    } else if (this.base > this.altura) {
      return "Está acostado";
    } else {
      return "Está parado";
    }
  }
}

let rectangulo3x6DeReferencia:Rectangulo = new Rectangulo(3,6);


console.log("Rectángulo de referencia");

console.log("Área: " + rectangulo3x6DeReferencia.calcularArea());

console.log("Comparación con un rectángulo 8x4");
console.log(rectangulo3x6DeReferencia.compararRectangulos());

console.log("¿Es un cuadrado? " + rectangulo3x6DeReferencia.determinarSiEsUnCuadrado());

console.log(rectangulo3x6DeReferencia.determinarSiEstaAcostadoOParado());


/*
class ComparadorDeRectangulos {
  private rectangulo1DeReferencia:Rectangulo;
  private rectangulo2:Rectangulo;

  constructor(paramRectangulo1DeReferencia:Rectangulo,paramRectangulo2:Rectangulo){
    this.rectangulo1DeReferencia = paramRectangulo1DeReferencia;
    this.rectangulo2 = paramRectangulo2;
  }
  public compararRectangulos():number{
    if (this.rectangulo1DeReferencia.calcularArea() === this.rectangulo2.calcularArea()){
      return 0;
    } else if (this.rectangulo1DeReferencia.calcularArea() > this.rectangulo2.calcularArea()) {
      return 1;
    } else {
      return -1;
    }
  }
}
*/

// let rectangulo8x4:Rectangulo = new Rectangulo(8,4);

// let comparadorDeRectangulos:ComparadorDeRectangulos = new ComparadorDeRectangulos(rectangulo3x6DeReferencia,rectangulo8x4);

// console.log("Segundo rectángulo");
// console.log("Base: " + rectangulo8x4.obtenerBase() + ", Altura: " + rectangulo8x4.obtenerAltura());
// console.log("Área: " + rectangulo8x4.calcularArea());
// console.log("¿Es un cuadrado? " + rectangulo8x4.determinarSiEsUnCuadrado());
// console.log(rectangulo8x4.determinarSiEstaAcostadoOParado());
