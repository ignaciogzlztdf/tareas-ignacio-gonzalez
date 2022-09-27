import { Punto } from "./Punto"

export class Recta{
  private puntoInicial:Punto;
  private puntoFinal:Punto;

  constructor(puntoInicial:Punto,puntoFinal:Punto){
    this.puntoInicial = puntoInicial;
    this.puntoFinal = puntoFinal;
  }
  obtenerPuntoInicial():Punto{
    return this.puntoInicial;
  }
  setearPuntoInicial(puntoInicial:Punto){
    this.puntoInicial = puntoInicial;
  }
  obtenerPuntoFinal():Punto{
    return this.puntoFinal;
  }
  setearPuntoFinal(puntoFinal:Punto){
    this.puntoFinal = puntoFinal;
  }
  calcularDistanciaEntrePuntos():number{
    let Ax: number = this.puntoInicial.obtenerX();
    let Ay: number = this.puntoInicial.obtenerY();
    let Bx: number = this.puntoFinal.obtenerX();
    let By: number = this.puntoFinal.obtenerY();

    let ejeX:number = Bx - Ax;
    let ejeY:number = By - Ay;

    ejeX = ejeX * ejeX;
    ejeY = ejeY * ejeY;

    return Math.sqrt(ejeX + ejeY);
  }
  // Podría calcular la inclinación
  toString():string{
    return this.puntoInicial.toString() + " , " + this.puntoFinal.toString();
  }
}