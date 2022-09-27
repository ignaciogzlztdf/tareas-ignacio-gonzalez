export class Punto{
  private x:number;
  private y:number;

  constructor(x:number,y:number){
    this.x = x;
    this.y = y;
  }
  obtenerX():number{
    return this.x;
  }
  setearX(x:number){
    this.x = x;
  }
  obtenerY():number{
    return this.y;
  }
  setearY(y:number){
    this.y = y;
  }
  toString():string{
    return "[" + this.x + ", " + this.y + "]";
  }
}