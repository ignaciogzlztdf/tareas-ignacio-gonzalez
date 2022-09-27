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
  public compararRectangulos(rectangulo3x6DeReferencia:Rectangulo, rectangulo8x4:Rectangulo):number{
    let areaDeRectangulo3x6:number = rectangulo3x6DeReferencia.calcularArea();
    let areaDeRectangulo8x4:number = rectangulo8x4.calcularArea();

    if (areaDeRectangulo3x6 === areaDeRectangulo8x4){
      return 0;
    } else if (areaDeRectangulo3x6 > areaDeRectangulo8x4) {
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
let rectangulo8x4:Rectangulo = new Rectangulo(8,4);

// Primer rectángulo
console.log("Rectángulo 3x6 de referencia");

console.log("Área: " + rectangulo3x6DeReferencia.calcularArea());

console.log("¿Es un cuadrado? " + rectangulo3x6DeReferencia.determinarSiEsUnCuadrado());

console.log(rectangulo3x6DeReferencia.determinarSiEstaAcostadoOParado());

// Segundo rectángulo
console.log("Rectángulo 8x4");

console.log("Área: " + rectangulo8x4.calcularArea());

console.log("¿Es un cuadrado? " + rectangulo8x4.determinarSiEsUnCuadrado());

console.log(rectangulo8x4.determinarSiEstaAcostadoOParado());

console.log("Comparo un rectángulo 3x6 con un rectángulo 8x4");
console.log(rectangulo3x6DeReferencia.compararRectangulos(rectangulo3x6DeReferencia,rectangulo8x4));