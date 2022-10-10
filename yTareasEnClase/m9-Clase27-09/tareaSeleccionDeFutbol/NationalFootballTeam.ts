import { Coach } from "./Coach";
import { Footballer } from "./Footballer"
import { Masseuse } from "./Masseuse"

export class NationalFootballTeam {
  private name:string;
  private players = new Array<Footballer>;
  private masseuse:Masseuse;
  private principalCoach:Coach;

  constructor(masseuse:Masseuse,coach:Coach,playerMessi:Footballer,playerDiMaria:Footballer){
    this.name = "Argentina national footall team";
    this.masseuse = masseuse;
    this.principalCoach = coach;
    this.players = [playerMessi,playerDiMaria];
  }
  public getName():string{
    return this.name;
  }
  public setName(name:string){
    this.name = name;
  }
  public getMasseuse():Masseuse{
    return this.masseuse;
  }
  public setMasseuse(newMasseuse:Masseuse){
    this.masseuse = newMasseuse;
  }
  public getPrincipalCoach():Coach{
    return this.principalCoach;
  }
  public setPrincipalCoach(newPrincipalCoach:Coach){
    this.principalCoach = newPrincipalCoach;
  }
  public getPlayers():Footballer[]{
    return this.players;
  }
  public getNumberOfPlayers():number{
    return this.players.length;
  }
  public addPlayer(newPlayer:Footballer){
    this.players.push(newPlayer);
    console.log("The player has been successfully added");
  }
  public findPlayer(player:Footballer){
    let playerDni = player.getDni();
    let position:number = -1;

    for(let index:number = 0; index < this.players.length; index++){
      if (this.players[index].getDni() === playerDni){
        position = index;
      }
    }
    if (position === -1){
      console.log("It's not registered");
    } else {
      console.log("This player is registered in position "+ position);
    }
  }
  public editPlayer(position:number,name:string,lastName:string,dni:number,dateOfBirth:Date,passport:string,fieldPosition:string,shirtNumber:number,skillfulLeg:string){
    this.players[position].setName(name);
    this.players[position].setLastName(lastName);
    this.players[position].setDni(dni);
    this.players[position].setDateOfBirth(dateOfBirth);
    this.players[position].setPassport(passport);
    this.players[position].setFieldPosition(fieldPosition);
    this.players[position].setShirtNumber(shirtNumber);
    this.players[position].setSkillfulLeg(skillfulLeg);
    console.log("Data updated successfully");
  }
  public deletePlayer(player:Footballer){
    let playerDni = player.getDni();
    
    for(let i:number = 0; i < this.players.length; i++){
      if (this.players[i].getDni() === playerDni){
        this.players.splice(i, 1);
      }
    }
    console.log("The player has been successfully deleted");
  }
}