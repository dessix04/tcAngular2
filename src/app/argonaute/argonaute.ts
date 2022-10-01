import { ARGONAUTE } from "./list-argonaute";

export class Argonaute{

    id:number;
    nom: string;
    prenom: string;
    qualificatif: string

    constructor(
    id:  number = 0,
    nom: string = "Djibril",
    prenom: string = "BAH",
    qualificatif: string = "super curieux"
    ){  
        this.id = ARGONAUTE.length+1;
        this.nom = nom;
        this.prenom = prenom;
        this.qualificatif = qualificatif;
    }
}