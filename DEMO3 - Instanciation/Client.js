export class Client {

    #noClient;
    nom;
    prenom;
    adresse;
    dateNaissance;
    #noPermis;


    constructor() {
        //code appelé lors de l'instanciation
        console.log("L'instance de client est crée")
    }

    afficherDonnesClient() {

        return `
            Numéro de client : ${this.noClient},
            nom : ${this.nom},
            prenom : ${this.prenom},
            adresse : ${this.adresse},
            date de naissance : ${this.dateNaissance ? this.dateNaissance.toLocaleDateString() : "<inconnu>"},
            numéro de permis : ${this.noPermis}
        `
    }


    get noClient() {
        return this.#noClient;
    }

    set noClient(value) {
        this.#noClient = value;
    }

    get noPermis() {
        return this.#noPermis;
    }

    set noPermis(value) {
        this.#noPermis = value;
    }
}