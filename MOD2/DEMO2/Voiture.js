export class Voiture {

    #numeroSerie;
    immat;
    marque;
    modele;
    kilometrage;
    vitesse;
    vitesseMax;
    dateMiseEnCirculation;
    boiteDeVitesse;
    energie;
    categorie;
    #proprietaire;

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

        if (numeroSerie) this.#numeroSerie = numeroSerie;
        if (immat) this.immat = immat;
        if (marque) this.marque = marque;
        if (modele) this.modele = modele;
        if (vitesseMax) this.vitesseMax = vitesseMax;
        if (dateMiseEnCirculation) this.dateMiseEnCirculation = dateMiseEnCirculation;

        this.vitesse = vitesse
        this.kilometrage = kilometrage;
        this.boiteDeVitesse = boiteDeVitesse
        this.energie = energie
        this.categorie = categorie

        //this.ajouterVoitureAuParc();
    }


    ajouterVoitureAuParc(){
        Voiture.nbInstance++
        Voiture.totalKm += this.kilometrage
        Voiture.moyenneKm = (Voiture.totalKm / Voiture.nbInstance).toFixed(2)
    }

    retirerVoitureDuParc(){
        Voiture.nbInstance--
        Voiture.totalKm -= this.kilometrage
        Voiture.moyenneKm = (Voiture.totalKm / Voiture.nbInstance).toFixed(2)
    }


    afficherDetailVoiture() {
        return `Voiture : immatriculation : ${this.immat},
        marque : ${this.marque},
        modele : ${this.modele},
        kilometrage : ${this.kilometrage},
        vitesse : ${this.vitesse},
        vitesse maxi : ${this.vitesseMax},
        date de mise en circulation : ${this.dateMiseEnCirculation ? this.dateMiseEnCirculation.toLocaleDateString() : "<inconnu>"},
        boite de vitesse : ${this.boiteDeVitesse},
        energie : ${this.energie},
        categorie : ${this.categorie}
        `
    }

    demarrer(code = null) {
        if (this.vitesse === 0) {
            if (code) {
                console.log(`Introduction du code ${code}`)
                console.log("Appuyer sur le bouton start")
            } else {
                console.log("Introduction de la clé dans le neiman")
                console.log("Tourner la clé")
            }
            console.log("La voiture démarre")
        } else {
            console.error("La voiture est déjà entrain de rouler. Re-démarrage impossible")
        }
    }

    arreter() {
        if (this.vitesse === 0) {
            console.log("La voiture est arrétée")
        } else {
            console.error("Il faut freiner!!! La voiture ne peut pas s'arreter si vitesse différent de 0 km/h.")
        }

        return this.vitesse
    }

    freiner() {
        if (this.vitesse < 5) {
            this.vitesse = 0
            console.log("La voiture peut etre arrétée")
        } else {
            this.vitesse -= 5;
            console.log("La voiture freine. Sa vitesse est alors de " + this.vitesse + " km/h.")
        }
    }

    accelerer() {
        if (this.vitesse > this.vitesseMax - 5) {
            this.vitesse = this.vitesseMax;
            console.log("La voiture a atteint la vitesse max.");
        } else {
            this.vitesse += 5;
            console.log("La voiture accelere. Sa vitesse est alors de " + this.vitesse + " km/h.");
        }
    }

    tourner(direction) {
        if (direction < 0) {
            console.log("La voiture tourne à gauche");
        } else if (direction > 0) {
            console.log("La voiture tourne à droite");
        } else {
            console.log("La voiture va tout droit");
        }
    }


    get proprietaire() {
        return this.#proprietaire;
    }

    set proprietaire(value) {
        this.#proprietaire = value;
    }

    klaxonner() {
        console.log("La voiture klaxonne")
    }


    get numeroSerie() {
        return this.#numeroSerie;
    }

    set numeroSerie(value) {
        this.#numeroSerie = value;
    }
}