// Définition de l'interface Vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implémentation de la classe Car qui implémente l'interface Vehicle
class Car implements Vehicle {
  make: string; // Marque de la voiture
  model: string; // Modèle de la voiture
  year: number; // Année de fabrication de la voiture

  // Le constructeur initialise les propriétés make, model et year
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implémentation de la méthode start
  start(): void {
    console.log("Car engine started");
  }
}

// Création d'une instance de la classe Car avec des valeurs pour make, model, et year
const myCar = new Car("Toyota", "Corolla", 2021);

// Appel de la méthode start sur l'instance myCar pour vérifier qu'elle fonctionne
myCar.start();
