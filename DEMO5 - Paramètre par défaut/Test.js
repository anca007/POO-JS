import {Client} from "./Client.js";
import {Voiture} from "./Voiture.js";



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

console.log(v1.afficherDetailVoiture()); //affiche le detail de v1
v1.ajouterVoitureAuParc()
console.group("Statistiques")
console.log(`Nombre de voitures sur le parc : ${Voiture.nbInstance}`)
console.log(`Moyenne kilometrage : ${Voiture.moyenneKm}`)
console.log(`Nombre de roues : ${Voiture.NB_ROUES_ROULANTES}`)
console.groupEnd()

//Utilisation du constructeur

let v2 = new Voiture(5678912341234, "AA655BB", "Porsche", "911", 15000);
console.log(v2.afficherDetailVoiture()); //affiche le detail de v2
v2.ajouterVoitureAuParc()
console.group("Statistiques")
console.log(`Nombre de voitures sur le parc : ${Voiture.nbInstance}`)
console.log(`Moyenne kilometrage : ${Voiture.moyenneKm}`)
console.log(`Nombre de roues : ${Voiture.NB_ROUES_ROULANTES}`)
console.groupEnd()



//creation de c1 de type Client (obtention d'une instance de Client)
let c1= new Client();
//hydratation des attributs de mon objet c1 de type Client
c1.noClient = 102530;
c1.nom = "Mario";
c1.prenom = "Luigi";
c1.adresse = "10 allée des Lilas";
c1.dateNaissance = new Date(1961, 1, 1);
c1.noPermis = "12487593Z125";
//comportements de mon objet c1 de type Client
console.log(c1.afficherDonnesClient());

console.group("Statistiques")
console.log(`Nombre de clients: ${Client.nbClientCrees}`)
console.groupEnd()

let c2= new Client(789456, "Mario", "Mario", "10 allée des Champignons", new Date(1960, 1, 1));
console.log(c2.afficherDonnesClient());
console.group("Statistiques")
console.log(`Nombre de clients: ${Client.nbClientCrees}`)
console.groupEnd()