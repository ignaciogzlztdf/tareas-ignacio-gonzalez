class Perro {
  // Atributos o estados
  private raza : string;
  private nombre : string;
  private dueño : string;
  private fechaNacimiento : Date;
  // Funcionalidades
  // Constructor
  constructor(paramRaza:string,paramNombre:string,paramDueño:string,paramFechaNacimiento:Date){
    this.raza = paramRaza;
    this.nombre = paramNombre;
    this.dueño = paramDueño;
    this.fechaNacimiento = paramFechaNacimiento;
  }
  public obtenerRaza():string{
    return this.raza;
  }
  public setearRaza(paramRaza):void{
    this.raza = paramRaza;
  }
  public obtenerNombre():string{
    return this.nombre;
  }
  public setearNombre(paramNombre):void{
    this.raza = paramNombre;
  }
  public obtenerDueño():string{
    return this.dueño;
  }
  public setearDueño(paramDueño):void{
    this.raza = paramDueño;
  }
  public obtenerFechaNacimiento():string{
    return this.fechaNacimiento.toString();
  }
  public setearFechaNacimiento(parametroFechaNacimiento){
    this.fechaNacimiento = parametroFechaNacimiento;
  }
  public obtenerEdad():number{
  let hoy:Date = new Date();
  return hoy.getFullYear() - this.fechaNacimiento.getFullYear();
  }
  public ladrar():void{
    console.log("¡Guau!");
  }
  public aullar():void{
    console.log("¡Auuuuuu!");
  }
}

let fechaNacimiento:Date = new Date("08-04-2021");

let luca = new Perro("Pastor Alemán","Luca","Ignacio González",fechaNacimiento);


luca.ladrar();

luca.aullar();

console.log("Fecha de nacimiento");
console.log(luca.obtenerFechaNacimiento());

console.log("Edad actual (en años)");
console.log(luca.obtenerEdad());