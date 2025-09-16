import {Vehicule} from "./Vehicule.js";

export class Bateau extends Vehicule{

    tirantEauMaxi;
    typeDeCoque;

    constructor(
        numeroSerie = null,
        immat = null,
        marque = null,
        modele = null,
        vitesseMax = null,
        dateMiseEnCirculation = null,
        vitesse = 0,
        energie = null,
        categorie = null,
        tirantEauMaxi = 0,
        typeDeCoque = "monocoque"

    ) {
        console.log("Instance de bateau créée");
        super(numeroSerie, immat, marque, modele, vitesseMax, dateMiseEnCirculation, vitesse, energie, categorie);

        this.tirantEauMaxi = tirantEauMaxi;
        this.typeDeCoque = typeDeCoque
    }

    afficherDetailBateau() {
        return super.afficherDetail() + `        
        tirant d'eau maxi : ${this.tirantEauMaxi},       
        type de coque : ${this.typeDeCoque}`
    }






}