import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmbaucherService } from 'src/app/embaucher.service';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-test-fils',
  templateUrl: './test-fils.component.html',
  styleUrls: ['./test-fils.component.css']
})
export class TestFilsComponent implements OnInit {
  green = "green";
  pris = "hiden";
  @Input() personne : Personne;
  constructor(
    private embaucherservice: EmbaucherService,
    private router: Router
    ) {
    this.personne = new Personne;
   }
   
  ngOnInit(): void {
    this.pris = this.pris;
  }


  embaucher(personne: Personne)
  {
    this.embaucherservice.embaucher(personne);
    this.embaucherservice.afficher();
    this.pris = ""
    
  }

  debaucher(personne : Personne){
    this.embaucherservice.debaucher(personne);
    this.embaucherservice.afficher();
    this.pris = "hiden";
  }

  readMode()
  {
    const link = ['detail',this.personne.id]
    this.router.navigate(link)
  }

}
