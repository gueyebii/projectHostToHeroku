import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/model/personne';
import { TestService } from '../test/test.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  personne: Personne;
  constructor(
    private testservice: TestService,
    private activatedRouter: ActivatedRoute,
    private activedRoute: ActivatedRoute
  ) {
    this.personne = new Personne;
   }

   
  ngOnInit(): void {
   
    this.activatedRouter.params.subscribe(
      (params) => {
        this.personne = this.testservice.getElelementById(params['id'])
      }
    )
  }

}
