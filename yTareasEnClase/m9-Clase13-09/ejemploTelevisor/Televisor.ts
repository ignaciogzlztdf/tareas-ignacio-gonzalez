class Televisor {
  // Atributos o estados
  private estaPrendido:boolean;
  private volumenActual:number;
  private canalActual:number;
  // Constructor
  constructor(paramPrendido:boolean,paramVolumen:number,paramCanal:number){
    this.estaPrendido = paramPrendido;
    this.volumenActual = paramVolumen;
    this.canalActual = paramCanal;
  }
  // Funcionalidades
  public setearVolumen(volumenDeUsuario:number){
    this.volumenActual = volumenDeUsuario;
  }
  public verVolumen():number{
    return this.volumenActual;
  }
  public setearCanal(canalDeUsuario:number):void{
    this.canalActual = canalDeUsuario;
  }
  public verCanalActual():number{
    return this.canalActual;
  }
  public prenderApagar():void{
    if (this.estaPrendido === true){
      this.estaPrendido = false;
    } else {
      this.estaPrendido = true;
    }
  } 
}

let tvLG = new Televisor(false,15,58);
let tvSamsung = new Televisor(true,23,45);
let tvSony = new Televisor(true,78,65);

tvLG.setearCanal(4);
let canalLg:number = tvLG.verCanalActual();
console.log("Canal: " + canalLg);