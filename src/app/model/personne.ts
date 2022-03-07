export class Personne{

    //property and not argument 
    id: number
    nom: string;
    prenom: string;
    age: number;
    job: string;
    //please there are the properties of my cla named Personne
    constructor(id=0,nom='',prenom='', age = 0, job=''){
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.job = job
    }
    
}