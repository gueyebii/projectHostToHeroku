import { Injectable } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private personnes: Personne[];
  constructor( ) {
      this.personnes = [
        new Personne("gueye","ndiawar",25,"developpeur"),
        new Personne("ndiaye","aminata",22,"comptable"),
        new Personne("seck","samba",35,"chanteur"),
        new Personne("lopy","modou",35,"chanteur"),
        new Personne("mendy","tapha",35,"chanteur"),
        new Personne("thiam","malick",35,"chanteur"),
        new Personne("baldé","matar",35,"chanteur"),
        new Personne("kanté","moustapha",35,"chanteur"),
        new Personne("mbaye","youssou",35,"chanteur"),
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

}
