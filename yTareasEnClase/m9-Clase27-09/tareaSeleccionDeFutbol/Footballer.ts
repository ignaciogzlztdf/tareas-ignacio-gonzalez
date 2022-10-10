import { Person } from "./Person"

export class Footballer extends Person {
  private shirtNumber:number;
  private fieldPosition:string;
  private skillfulLeg:string;

  constructor(name:string,lastName:string,dni:number,passport:string,dateOfBirth:Date,shirtNumber:number,fieldPosition:string,skillfulLeg:string){
    super(name,lastName,dni,passport,dateOfBirth);
    this.shirtNumber = shirtNumber;
    this.fieldPosition = fieldPosition;
    this.skillfulLeg = skillfulLeg;
  }
  // getters & setters
  public getShirtNumber():number{
    return this.shirtNumber;
  }
  public setShirtNumber(shirtNumber:number){
    this.shirtNumber = shirtNumber;
  }
  public getFieldPosition():string{
    return this.fieldPosition;
  }
  public setFieldPosition(fieldPosition:string){
    this.fieldPosition = fieldPosition;
  }
  public getSkillfulLeg():string{
    return this.skillfulLeg;
  }
  public setSkillfulLeg(skillfulLeg:string){
    this.skillfulLeg = skillfulLeg;
  }
}