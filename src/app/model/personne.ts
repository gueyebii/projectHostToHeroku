export class Personne{

    //property and not argument 
    nom: string;
    prenom: string;
    age: number;
    job: string;
    //please there are the properties of my cla named Personne
    constructor(nom='',prenom='', age = 0, job=''){
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.job = job
    }
    
}