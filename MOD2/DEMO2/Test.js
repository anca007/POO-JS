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

//creation de c1 de type Client (obtention d'une instance de Client)
let c1= new Client();
//hydratation des attributs de mon objet c1 de type Client
c1.noClient = 102530;
c1.nom = "Mario";
c1.prenom = "Luigi";
c1.adresse = "10 allée des Lilas";
c1.dateNaissance = new Date(1961, 1, 1);
c1.noPermis = "12487593Z125";

v1.proprietaire = c1

//affichage des informations du client
console.log(`Infos du propriétaire de la voiture : ${v1.proprietaire.afficherDonnesClient()}`)
//seule la voiture connait son propriétaire, le client ne connait pas sa voiture

c1.adresse = "27 rue des champignons"
console.log(`Infos du propriétaire de la voiture : ${v1.proprietaire.afficherDonnesClient()}`)



