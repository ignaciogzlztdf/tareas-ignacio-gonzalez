class Electrodomestico {
  // Atributos o estados
  private nombre:string;
  private precioBase:number; // en pesos argentinos
  private color:string;
  private consumoEnergetico:number; // en Kwh Anuales
  private peso:number; // en kilogramos
  // Constructor
  constructor(paramNombre:string,paramPrecioBase:number,paramColor:string,paramConsumoEnergetico:number,paramPeso:number){
    this.nombre = paramNombre;
    this.precioBase = paramPrecioBase;
    this.color = paramColor;
    this.consumoEnergetico = paramConsumoEnergetico;
    this.peso = paramPeso;
  }
  // Funcionalidades
  // 5 funciones get y 5 funciones set para los 5 parámetros
  public obtenerNombre():string{
    return this.nombre;
  }
  public setearNombre(nombreDeUsuario:string){
    this.nombre = nombreDeUsuario;
  }
  public obtenerPrecioBase():number{
    return this.precioBase;
  }
  public setearPrecioBase(precioBaseDeUsuario:number){
    this.precioBase = precioBaseDeUsuario;
  }
  public obtenerColor():string{
    return this.color;
  }
  public setearColor(colorDeUsuario:string){
    this.color = colorDeUsuario;
  }
  public obtenerConsumoEnergetico():number{
    return this.consumoEnergetico;
  }
  public setearConsumoEnergetico(consumoEnergeticoDeUsuario:number){
    this.consumoEnergetico = consumoEnergeticoDeUsuario;
  }
  public obtenerPeso():number{
    return this.peso;
  }
  public setearPeso(pesoDeUsuario:number){
    this.peso = pesoDeUsuario;
  }
  public comprobarSiEsDeBajoConsumo():boolean{
    let bajoConsumoEnKwhAnuales:number = 350;
    if(this.consumoEnergetico < bajoConsumoEnKwhAnuales){
      return true;
    } else {
      return false;
    }
  }
  public calcularBalance():number{
    return this.precioBase / this.peso;
  }
  public comprobarSiEsUnProductoDeAltaGama():boolean{
    if(this.calcularBalance() > 3){
      return true;
    } else {
      return false;
    }
  }
}

let heladera = new Electrodomestico("Heladera",42000,"Gris",322,130);

console.log("¿Es un producto de bajo consumo?");
console.log(heladera.comprobarSiEsDeBajoConsumo());

console.log("Cálculo de balance");
console.log(heladera.calcularBalance());

console.log("¿Es un producto de alta gama?");
console.log(heladera.comprobarSiEsUnProductoDeAltaGama());