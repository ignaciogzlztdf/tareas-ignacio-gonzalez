// Representación de mi objeto - Perro

// | Planteo simple |
// Perro
  // Funciones
    // Ladrar
    // Aullar
    // Obtener raza
  // Estado
    // Raza
    // Nombre
    // Dueño
    // Edad

// | Planteo con terminología para usar en código |
// Perro
  // Funciones
    // ladrar()
    // aullar()
    // obtenerRaza()
  // Estado (variables/constantes)
    // raza
    // nombre
    // dueño
    // edad

// | Pseudocódigo |
// Perro
  // Estado (variables/constantes)
    // raza: string
    // nombre: string
    // dueño: string
    // edad: number

    // Funciones
    /*ladrar(){
      console.log("¡Guau!");
    }*/
    /*aullar(){
      console.log("¡Auuuuuu!");
    }*/
    /*obtenerRaza(){
      console.log(this.raza);
    }*/

class Perro {
  // Atributos o estados
  raza : string; // Pastor Alemán
  nombre : string; // Luca
  dueño : string; // Ignacio González
  edad : number; // 1 (año) SE RECOMIENDA PONER LA FECHA DE NACIMIENTO EN LUGAR DE LA EDAD ACTUAL

  // Funcionalidades
  // Constructor
  constructor(raza:string,nombre:string,dueño:string,edad:number){
    this.raza = raza;
    this.nombre = nombre;
    this.dueño = dueño;
    this.edad = edad;
  }

  ladrar(){
    console.log("¡Guau!");
  }

  aullar(){
    console.log("¡Auuuuuu!");
  }

  obtenerRaza(){
    console.log(this.raza);
  }
}

let luca = new Perro("Pastor Alemán","Luca","Ignacio González",1);

console.log(luca.nombre);

luca.ladrar();
luca.aullar();
luca.obtenerRaza();