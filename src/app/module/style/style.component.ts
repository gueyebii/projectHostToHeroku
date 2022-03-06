import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { PremierService } from 'src/app/premier.service';
import { TestService } from 'src/app/presentation/test/test.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'],
  providers: [TestService]

})
export class StyleComponent implements OnInit {

  personne: Personne;
  color = "red";
  show = true;
  teams = [
    'real madrid',
    'fc barcelona',
    'manchester united',
    'paris saint germain',
    'olympique de marseille'
  ]

  constructor(private testservice: TestService) {  this.personne = new Personne("ndiaye","soukey",35,"formatrice");}
  
  ngOnInit(): void {
   
  }

  creerPersonne(): Personne{
    return this.personne;
  }

  afficherTableau()
  {
    this.testservice.addPersonne(this.creerPersonne());
    this.testservice.afficherPersonnes();
  }

}


