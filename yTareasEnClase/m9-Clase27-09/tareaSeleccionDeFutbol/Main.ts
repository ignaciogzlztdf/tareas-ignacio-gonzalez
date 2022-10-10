import { Footballer } from "./Footballer"
import { Masseuse } from "./Masseuse"
import { Coach } from "./Coach"
import { NationalFootballTeam } from "./NationalFootballTeam"

// date of birth of team members
let dateOfBirthMessi = new Date("06-24-1987");
let dateOfBirthDiMaría = new Date("02-14-1988");
let dateOfBirthScaloni = new Date("05-16-1978");
let dateOfBirthDAndrea = new Date("04-21-1975");
let dateOfBirthMartínez = new Date("08-22-1997");

// team members
let playerMessi = new Footballer("Lionel","Messi",11111111,"AAA000",dateOfBirthMessi,10,"Forward","Left-footed");
let playerDiMaría = new Footballer("Ángel","Di María",22222222,"BBB111",dateOfBirthDiMaría,11,"Midfielder","Left-footed");
let principalCoach = new Coach("Lionel","Scaloni",33333333,"CCC222",dateOfBirthScaloni,"Principal Coach");
let masseuse = new Masseuse("Marcelo","D'Andrea",44444444,"DDD333",dateOfBirthDAndrea,"Physiotherapy");

// new member
let playerMartínez = new Footballer("Lautaro","Martínez",55555555,"EEE444",dateOfBirthMartínez,22,"Forward","Right-footed")

// football team
let argentinaFootballTeam = new NationalFootballTeam(masseuse,principalCoach,playerMessi,playerDiMaría);

// checking on console
console.log(argentinaFootballTeam.getName());
console.log(argentinaFootballTeam.getPlayers());
argentinaFootballTeam.addPlayer(playerMartínez);
console.log(argentinaFootballTeam.getPlayers());
argentinaFootballTeam.deletePlayer(playerDiMaría);
console.log(argentinaFootballTeam.getPlayers());

console.log(playerMessi.getAge());
console.log(argentinaFootballTeam.getNumberOfPlayers());