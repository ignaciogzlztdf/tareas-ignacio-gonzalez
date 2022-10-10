"use strict";
exports.__esModule = true;
var Footballer_1 = require("./Footballer");
var Masseuse_1 = require("./Masseuse");
var Coach_1 = require("./Coach");
var NationalFootballTeam_1 = require("./NationalFootballTeam");
// date of birth of team members
var dateOfBirthMessi = new Date("06-24-1987");
var dateOfBirthDiMaría = new Date("02-14-1988");
var dateOfBirthScaloni = new Date("05-16-1978");
var dateOfBirthDAndrea = new Date("04-21-1975");
var dateOfBirthMartínez = new Date("08-22-1997");
// team members
var playerMessi = new Footballer_1.Footballer("Lionel", "Messi", 11111111, "AAA000", dateOfBirthMessi, 10, "Forward", "Left-footed");
var playerDiMaría = new Footballer_1.Footballer("Ángel", "Di María", 22222222, "BBB111", dateOfBirthDiMaría, 11, "Midfielder", "Left-footed");
var principalCoach = new Coach_1.Coach("Lionel", "Scaloni", 33333333, "CCC222", dateOfBirthScaloni, "Principal Coach");
var masseuse = new Masseuse_1.Masseuse("Marcelo", "D'Andrea", 44444444, "DDD333", dateOfBirthDAndrea, "Physiotherapy");
// new member
var playerMartínez = new Footballer_1.Footballer("Lautaro", "Martínez", 55555555, "EEE444", dateOfBirthMartínez, 22, "Forward", "Right-footed");
// football team
var argentinaFootballTeam = new NationalFootballTeam_1.NationalFootballTeam(masseuse, principalCoach, playerMessi, playerDiMaría);
// checking on console
console.log(argentinaFootballTeam.getName());
console.log(argentinaFootballTeam.getPlayers());
argentinaFootballTeam.addPlayer(playerMartínez);
console.log(argentinaFootballTeam.getPlayers());
argentinaFootballTeam.deletePlayer(playerDiMaría);
console.log(argentinaFootballTeam.getPlayers());
console.log(playerMessi.getAge());
console.log(argentinaFootballTeam.getNumberOfPlayers());
