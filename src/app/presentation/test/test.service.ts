import { Injectable } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private personnes: Personne[];
  constructor( ) {
      this.personnes = [
        new Personne(1,"gueye","ndiawar",25,"developpeur"),
        new Personne(2,"ndiaye","aminata",22,"comptable"),
        new Personne(3,"seck","samba",35,"chanteur"),
        new Personne(4,"lopy","modou",35,"chanteur"),
        new Personne(5,"mendy","tapha",35,"chanteur"),
        new Personne(6,"thiam","malick",35,"chanteur"),
        new Personne(7,"baldé","matar",35,"chanteur"),
        new Personne(8,"kanté","moustapha",35,"chanteur"),
        new Personne(9,"mbaye","youssou",35,"chanteur"),
      ];
   }

   getPersonnes(): Personne[]{
     return this.personnes;
   }

   addPersonne(personne : Personne){
     this.personnes.push(personne);
   }

   afficherPersonnes(){
     console.log(this.personnes);
   }

    getElelementById(id: number): Personne
    {
        const personne: any = this.personnes.find( (personne) =>
          {
            return personne.id == id
          }
          )
          console.log(personne);
          return personne;
    }

}
