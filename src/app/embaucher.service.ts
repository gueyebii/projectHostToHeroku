import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucherService {
  private personnes: Personne[];
  constructor() { 
    this.personnes = [];
  }

  //pour embaucher une personne 
  embaucher(personne : Personne): void {
    const index = this.personnes.indexOf(personne);
    if(index < 0)
    {
      this.personnes.push(personne);
      alert(`${personne.prenom} est embauché avec succés`)
    }
    else{
      alert(`${personne.prenom} est déja embaucher  `)
    }
  
  }

  //pour debaucher une personne
  debaucher(personne: Personne): void {
    const index = this.personnes.indexOf(personne);
    if(index >= 0)
    {
      this.personnes.splice(index, 1);
    }else
    {
      alert(`${personne.prenom} n'est pas embaucher !!!`)
    }
  }

  //afficher la liste des embaucher
  afficher()
  {
    console.log(this.personnes);
    
  }

  //retourner la liste des embauchés

  listeEmbauher(): Personne[]
  {
    return this.personnes;
  }



}
