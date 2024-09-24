// Implémentation de la classe Car qui implémente l'interface Vehicle
var Car = /** @class */ (function () {
    // Le constructeur initialise les propriétés make, model et year
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implémentation de la méthode start
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Création d'une instance de la classe Car avec des valeurs pour make, model, et year
var myCar = new Car("Toyota", "Corolla", 2021);
// Appel de la méthode start sur l'instance myCar pour vérifier qu'elle fonctionne
myCar.start();
