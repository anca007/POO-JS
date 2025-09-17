// Création d'une adresse
import {Adresse} from "../BO/Adresse.js";
import {MedecinGeneraliste} from "../BO/MedecinGeneraliste.js";

const adresse1 = new Adresse("Résidence Les Fleurs", 12, "bis", "rue Victor Hugo", 44000, "Nantes");
adresse1.afficher();

// Création d'un médecin
const medecin = new MedecinGeneraliste("Dupont", "Jean", "0601020304");
medecin.afficher();

// Changer le tarif
MedecinGeneraliste.tarif = 30
medecin.afficher();
