import {Voiture} from "./Voiture.js";
import {Bateau} from "./Bateau.js";



let v1 = new Voiture();
v1.numeroSerie = 1234567891234
v1.immat = "XX254XX";
v1.marque = "Mercedes";
v1.modele = "SLK";
v1.kilometrage = 100;
v1.vitesse = 0;
v1.vitesseMax = 230;
v1.boiteDeVitesse = "automatique";
v1.energie = "essence";
v1.categorie = "cabriolet";

console.log(v1.afficherDetailVoiture())

let b1 = new Bateau();
//données propres au type Vehicule héritées
b1.numeroSerie  = "zer2154";
b1.immat = "1257retc";
b1.marque = "Jeanneau";
b1.modele = "Zodiac";
b1.energie = "essence";
b1.vitesse = 0;
b1.vitesseMax = 125;
//données propres au type bateau
b1.tirantEauMaxi = 45.26;
b1.typeDeCoque = "monocoque";

console.log(b1.afficherDetailBateau())



