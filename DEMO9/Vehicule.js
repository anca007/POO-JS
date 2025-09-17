export class Vehicule {

    #numeroSerie;
    #proprietaire;

    constructor(
        numeroSerie,
        immat,
        marque,
        modele,
        vitesseMax,
        dateMiseEnCirculation,
        energie,
        categorie,
        vitesse = 0
    ) {
        this.#numeroSerie = numeroSerie;
        this.immat = immat;
        this.marque = marque;
        this.modele = modele;
        this.vitesseMax = vitesseMax;
        this.dateMiseEnCirculation = dateMiseEnCirculation;
        this.energie = energie;
        this.categorie = categorie;
        this.vitesse = vitesse
    }


    afficherDetail() {
        return `Véhicule : immatriculation : ${this.immat},
        marque : ${this.marque},
        modele : ${this.modele},       
        vitesse : ${this.vitesse},
        vitesse maxi : ${this.vitesseMax},
        date de mise en circulation : ${this.dateMiseEnCirculation ? this.dateMiseEnCirculation.toLocaleDateString() : "<inconnu>"},       
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
            console.log("Le véhicule démarre")
        } else {
            console.error("Le véhicule est déjà entrain de bouger. Re-démarrage impossible")
        }
    }

    arreter() {
        if (this.vitesse === 0) {
            console.log("Le véhicule est arrété")
        } else {
            console.error("Il faut freiner!!! Le véhicule ne peut pas s'arreter si vitesse différent de 0 km/h.")
        }

        return this.vitesse
    }

    freiner() {
        if (this.vitesse < 5) {
            this.vitesse = 0
            console.log("Le véhicule peut etre arrété")
        } else {
            this.vitesse -= 5;
            console.log("Le véhicule freine. Sa vitesse est alors de " + this.vitesse + " km/h.")
        }
    }

    accelerer() {
        if (this.vitesse > this.vitesseMax - 5) {
            this.vitesse = this.vitesseMax;
            console.log("Le véhicule a atteint la vitesse max.");
        } else {
            this.vitesse += 5;
            console.log("Le véhicule accelere. Sa vitesse est alors de " + this.vitesse + " km/h.");
        }
    }

    tourner(direction) {
        if (direction < 0) {
            console.log("Le véhicule tourne à gauche");
        } else if (direction > 0) {
            console.log("Le véhicule tourne à droite");
        } else {
            console.log("Le véhicule va tout droit");
        }
    }


    get proprietaire() {
        return this.#proprietaire;
    }

    set proprietaire(client) {
        this.#proprietaire = client;
        client.ajouterVoiture(this)
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