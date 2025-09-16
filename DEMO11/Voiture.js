import {Vehicule} from "./Vehicule.js";

export class Voiture extends Vehicule {


    kilometrage;
    boiteDeVitesse;
    //attributs de classe
    static nbInstance = 0;
    static totalKm = 0
    static moyenneKm = 0

    //constante
    static NB_ROUES_ROULANTES = 4

    constructor(
        numeroSerie = null,
        immat = null,
        marque = null,
        modele = null,
        vitesseMax = null,
        dateMiseEnCirculation = null,
        vitesse = 0,
        kilometrage = 0,
        boiteDeVitesse = "manuel",
        energie = "essence",
        categorie = "berline"
    ) {
        console.log("Instance de voiture créée");
        super(numeroSerie, immat, marque, modele, vitesseMax, dateMiseEnCirculation, vitesse, energie, categorie);

        this.kilometrage = kilometrage;
        this.boiteDeVitesse = boiteDeVitesse
    }


    ajouterVoitureAuParc() {
        Voiture.nbInstance++
        Voiture.totalKm += this.kilometrage
        Voiture.moyenneKm = (Voiture.totalKm / Voiture.nbInstance).toFixed(2)
    }

    retirerVoitureDuParc() {
        Voiture.nbInstance--
        Voiture.totalKm -= this.kilometrage
        Voiture.moyenneKm = (Voiture.totalKm / Voiture.nbInstance).toFixed(2)
    }

    klaxonner() {
        console.log("La voiture klaxonne")
    }

    //mùéthode surchargée
    afficherDetail() {
        return super.afficherDetail() + `        
        kilometrage : ${this.kilometrage},       
        boite de vitesse : ${this.boiteDeVitesse}`
    }

}