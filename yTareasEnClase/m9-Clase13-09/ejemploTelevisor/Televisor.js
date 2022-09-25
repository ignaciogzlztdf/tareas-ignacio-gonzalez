var Televisor = /** @class */ (function () {
    // Constructor
    function Televisor(paramPrendido, paramVolumen, paramCanal) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
    }
    // Funcionalidades
    Televisor.prototype.setearVolumen = function (volumenDeUsuario) {
        this.volumenActual = volumenDeUsuario;
    };
    Televisor.prototype.verVolumen = function () {
        return this.volumenActual;
    };
    Televisor.prototype.setearCanal = function (canalDeUsuario) {
        this.canalActual = canalDeUsuario;
    };
    Televisor.prototype.verCanalActual = function () {
        return this.canalActual;
    };
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Televisor;
}());
var tvLG = new Televisor(false, 15, 58);
var tvSamsung = new Televisor(true, 23, 45);
var tvSony = new Televisor(true, 78, 65);
tvLG.setearCanal(4);
var canalLg = tvLG.verCanalActual();
console.log("Canal: " + canalLg);
