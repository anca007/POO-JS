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

let v2 = new Voiture();
v2.numeroSerie = 5678912341234
v2.immat = "AA655BB";
v2.marque = "Porsche";
v2.modele = "911";
v2.kilometrage = 15000;
v2.vitesse = 0;
v2.vitesseMax = 310;
v2.boiteDeVitesse = "automatique";
v2.energie = "essence";
v2.categorie = "cabriolet";

console.log(v2.afficherDetailVoiture()); //affiche le detail de v1
v2.ajouterVoitureAuParc()
console.group("Statistiques")
console.log(`Nombre de voitures sur le parc : ${Voiture.nbInstance}`)
console.log(`Moyenne kilometrage : ${Voiture.moyenneKm}`)
console.log(`Nombre de roues : ${Voiture.NB_ROUES_ROULANTES}`)
console.groupEnd()

v1.retirerVoitureDuParc()
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

let c2= new Client();
//hydratation des attributs de mon objet c1 de type Client
c2.noClient = 789456;
c2.nom = "Mario";
c2.prenom = "Mario";
c2.adresse = "10 allée des Champignons";
c2.dateNaissance = new Date(1960, 1, 1);
c2.noPermis = "798546546";
//comportements de mon objet c1 de type Client
console.log(c2.afficherDonnesClient());

console.group("Statistiques")
console.log(`Nombre de clients: ${Client.nbClientCrees}`)
console.groupEnd()