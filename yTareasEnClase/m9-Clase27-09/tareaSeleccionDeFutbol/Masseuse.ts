import { Person } from "./Person"

export class Masseuse extends Person {
  private workField:string;

  public constructor(name:string,lastName:string,dni:number,passport:string,dateOfBirth:Date,workField:string){
    super(name,lastName,dni,passport,dateOfBirth);
    this.workField = workField;
  }
  // getters & setters
  public getWorkField():string{
    return this.workField;
  }
  public setWorkField(workField:string){
    this.workField = workField;
  }
}