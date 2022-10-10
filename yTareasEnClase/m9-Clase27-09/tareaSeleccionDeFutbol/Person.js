"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, lastName, dni, passport, dateOfBirth) {
        this.name = name;
        this.lastName = lastName;
        this.dni = dni;
        this.passport = passport;
        this.dateOfBirth = dateOfBirth;
    }
    // getters & setters
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getDni = function () {
        return this.dni;
    };
    Person.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Person.prototype.getPassport = function () {
        return this.passport;
    };
    Person.prototype.setPassport = function (passport) {
        this.passport = passport;
    };
    Person.prototype.getDateOfBirth = function () {
        return this.dateOfBirth;
    };
    Person.prototype.setDateOfBirth = function (dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    };
    Person.prototype.getAge = function () {
        var today = new Date();
        return today.getFullYear() - this.dateOfBirth.getFullYear();
    };
    return Person;
}());
exports.Person = Person;
