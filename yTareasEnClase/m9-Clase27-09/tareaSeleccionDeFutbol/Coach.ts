import { Person } from "./Person"

export class Coach extends Person {
  private occupation:string;

  public constructor(name:string,lastName:string,dni:number,passport:string,dateOfBirth:Date,occupation:string){
    super(name,lastName,dni,passport,dateOfBirth);
    this.occupation = occupation;
  }
  // getters & setters
  public getOccupation():string{
    return this.occupation;
  }
  public setOccupation(occupation:string){
    this.occupation = occupation;
  }
}