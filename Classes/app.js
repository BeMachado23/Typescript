var Carro = /** @class */ (function () {
    function Carro(marca, aro) {
        this.marca = marca;
        this.aro = aro;
    }
    Carro.prototype.verificationAro = function () {
        return "O aro do carro \u00E9: ".concat(this.aro);
    };
    return Carro;
}());
var ferrari = new Carro("Ferrari", 20);
console.log(ferrari);
