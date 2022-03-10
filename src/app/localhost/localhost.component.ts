import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { TestService } from '../presentation/test/test.service';

@Component({
  selector: 'app-localhost',
  templateUrl: './localhost.component.html',
  styleUrls: ['./localhost.component.css']
})
export class LocalhostComponent implements OnInit {

  personnes: Personne[];
  constructor(
    private testsrvice: TestService
  ) {
    this.personnes = []
   }

  ngOnInit(): void {
    this.personnes = this.testsrvice.getPersonnes()
  }
  



}
