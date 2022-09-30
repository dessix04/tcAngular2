export class Argonaute{

    id:number;
    nom: string;
    prenom: string;
    qualificatif: string

    constructor(
    nom: string = "Djibril",
    prenom: string = "BAH",
    qualificatif: string = "super curieux"
    ){
        this.nom = nom;
        this.prenom = prenom;
        this.qualificatif = qualificatif;
    }
}