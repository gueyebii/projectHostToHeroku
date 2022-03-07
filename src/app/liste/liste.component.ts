import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from 'express';
import { EmbaucherService } from '../embaucher.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  bgcolor: any;
  personnes: Personne[];
  constructor(
    private embaucherservice: EmbaucherService,
    private activedroute: ActivatedRoute
    ) {
    this.personnes = this.embaucherservice.listeEmbauher();
    this.bgcolor = "";
  }

  ngOnInit(): void {
    this.activedroute.params.subscribe(
        (params) => {
         /*  console.log(params); */
          this.bgcolor = params['default']
        }
       
    )
  }



}
