"use strict";
exports.__esModule = true;
exports.NationalFootballTeam = void 0;
var NationalFootballTeam = /** @class */ (function () {
    function NationalFootballTeam(masseuse, coach, playerMessi, playerDiMaria) {
        this.players = new Array;
        this.name = "Argentina national footall team";
        this.masseuse = masseuse;
        this.principalCoach = coach;
        this.players = [playerMessi, playerDiMaria];
    }
    NationalFootballTeam.prototype.getName = function () {
        return this.name;
    };
    NationalFootballTeam.prototype.setName = function (name) {
        this.name = name;
    };
    NationalFootballTeam.prototype.getMasseuse = function () {
        return this.masseuse;
    };
    NationalFootballTeam.prototype.setMasseuse = function (newMasseuse) {
        this.masseuse = newMasseuse;
    };
    NationalFootballTeam.prototype.getPrincipalCoach = function () {
        return this.principalCoach;
    };
    NationalFootballTeam.prototype.setPrincipalCoach = function (newPrincipalCoach) {
        this.principalCoach = newPrincipalCoach;
    };
    NationalFootballTeam.prototype.getPlayers = function () {
        return this.players;
    };
    NationalFootballTeam.prototype.getNumberOfPlayers = function () {
        return this.players.length;
    };
    NationalFootballTeam.prototype.addPlayer = function (newPlayer) {
        this.players.push(newPlayer);
        console.log("The player has been successfully added");
    };
    NationalFootballTeam.prototype.findPlayer = function (player) {
        var playerDni = player.getDni();
        var position = -1;
        for (var index = 0; index < this.players.length; index++) {
            if (this.players[index].getDni() === playerDni) {
                position = index;
            }
        }
        if (position === -1) {
            console.log("It's not registered");
        }
        else {
            console.log("This player is registered in position " + position);
        }
    };
    NationalFootballTeam.prototype.editPlayer = function (position, name, lastName, dni, dateOfBirth, passport, fieldPosition, shirtNumber, skillfulLeg) {
        this.players[position].setName(name);
        this.players[position].setLastName(lastName);
        this.players[position].setDni(dni);
        this.players[position].setDateOfBirth(dateOfBirth);
        this.players[position].setPassport(passport);
        this.players[position].setFieldPosition(fieldPosition);
        this.players[position].setShirtNumber(shirtNumber);
        this.players[position].setSkillfulLeg(skillfulLeg);
        console.log("Data updated successfully");
    };
    NationalFootballTeam.prototype.deletePlayer = function (player) {
        var playerDni = player.getDni();
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].getDni() === playerDni) {
                this.players.splice(i, 1);
            }
        }
        console.log("The player has been successfully deleted");
    };
    return NationalFootballTeam;
}());
exports.NationalFootballTeam = NationalFootballTeam;
