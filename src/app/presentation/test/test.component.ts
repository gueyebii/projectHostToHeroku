import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { PremierService } from 'src/app/premier.service';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
 

})
export class TestComponent implements OnInit {

  personnes: Personne[];
  constructor(private testservice: TestService) { 
    this.personnes = [];
    }

  ngOnInit(): void {
    this.personnes  = this.testservice.getPersonnes();
  }

}
