var Electrodomestico = /** @class */ (function () {
    // Constructor
    function Electrodomestico(paramNombre, paramPrecioBase, paramColor, paramConsumoEnergetico, paramPeso) {
        this.nombre = paramNombre;
        this.precioBase = paramPrecioBase;
        this.color = paramColor;
        this.consumoEnergetico = paramConsumoEnergetico;
        this.peso = paramPeso;
    }
    // Funcionalidades
    // 5 funciones get y 5 funciones set para los 5 parámetros
    Electrodomestico.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.setearNombre = function (nombreDeUsuario) {
        this.nombre = nombreDeUsuario;
    };
    Electrodomestico.prototype.obtenerPrecioBase = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.setearPrecioBase = function (precioBaseDeUsuario) {
        this.precioBase = precioBaseDeUsuario;
    };
    Electrodomestico.prototype.obtenerColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.setearColor = function (colorDeUsuario) {
        this.color = colorDeUsuario;
    };
    Electrodomestico.prototype.obtenerConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Electrodomestico.prototype.setearConsumoEnergetico = function (consumoEnergeticoDeUsuario) {
        this.consumoEnergetico = consumoEnergeticoDeUsuario;
    };
    Electrodomestico.prototype.obtenerPeso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.setearPeso = function (pesoDeUsuario) {
        this.peso = pesoDeUsuario;
    };
    Electrodomestico.prototype.comprobarSiEsDeBajoConsumo = function () {
        var bajoConsumoEnKwhAnuales = 350;
        if (this.consumoEnergetico < bajoConsumoEnKwhAnuales) {
            return true;
        }
        else {
            return false;
        }
    };
    Electrodomestico.prototype.calcularBalance = function () {
        return this.precioBase / this.peso;
    };
    Electrodomestico.prototype.comprobarSiEsUnProductoDeAltaGama = function () {
        if (this.calcularBalance() > 3) {
            return true;
        }
        else {
            return false;
        }
    };
    return Electrodomestico;
}());
var heladera = new Electrodomestico("Heladera", 42000, "Gris", 322, 130);
console.log("¿Es un producto de bajo consumo?");
console.log(heladera.comprobarSiEsDeBajoConsumo());
console.log("Cálculo de balance");
console.log(heladera.calcularBalance());
console.log("¿Es un producto de alta gama?");
console.log(heladera.comprobarSiEsUnProductoDeAltaGama());
