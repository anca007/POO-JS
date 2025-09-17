import {Vehicule} from "./Vehicule.js";

export class Bateau extends Vehicule{

    constructor(
        numeroSerie,
        immat,
        marque,
        modele,
        vitesseMax,
        dateMiseEnCirculation,
        energie,
        categorie ,
        vitesse = 0,
        tirantEauMaxi = 0,
        typeDeCoque = "monocoque"

    ) {
        console.log("Instance de bateau créée");
        super(numeroSerie, immat, marque, modele, vitesseMax, dateMiseEnCirculation, energie, categorie,  vitesse)

        this.tirantEauMaxi = tirantEauMaxi;
        this.typeDeCoque = typeDeCoque
    }

    afficherDetailBateau() {
        return super.afficherDetail() + `        
        tirant d'eau maxi : ${this.tirantEauMaxi},       
        type de coque : ${this.typeDeCoque}`
    }






}