export class Client {

    #noClient;
    nom;
    prenom;
    adresse;
    dateNaissance;
    #noPermis;
    #voitures = [];

    //attribut de classe
    static nbClientCrees = 0;
    //constante de classe
    static EST_CLIENT = true

    constructor(noClient = null, nom = null, prenom = null, adresse = null, dateNaissance = null, noPermis = null) {
        //code appelé lors de l'instanciation
        console.log("L'instance de client est crée")

        if(noClient) this.#noClient = noClient;
        if(nom)this.nom = nom;
        if(prenom)this.prenom = prenom;
        if(adresse)this.adresse = adresse;
        if(dateNaissance)this.dateNaissance = dateNaissance;
        if(noPermis)this.#noPermis = noPermis;

        Client.ajouterClient()
    }

// Méthodes de classe
    static afficherNbClients() {
        return `Nombre total de clients : ${Client.nbClientCrees}`
    }

    static ajouterClient() {
        Client.nbClientCrees++;
    }

    static retirerClient(){
        Client.nbClientCrees--;
    }


    afficherDonnesClient() {

        return `
            Numéro de client : ${this.noClient},
            nom : ${this.nom},
            prenom : ${this.prenom},
            adresse : ${this.adresse},
            date de naissance : ${this.dateNaissance ? this.dateNaissance.toLocaleDateString() : "<inconnu>"},
            numéro de permis : ${this.noPermis}, \n
            voitures : ${this.#voitures.map( v => v.afficherDetailVoiture()).join('\n')}                       
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

    ajouterVoiture(voiture) {
        if (!this.#voitures.includes(voiture)) {
            this.#voitures.push(voiture);
            voiture.proprietaire = this; // met à jour la voiture
        }
    }


}