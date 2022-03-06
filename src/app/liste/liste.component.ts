import { Component, OnInit } from '@angular/core';
import { EmbaucherService } from '../embaucher.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  personnes: Personne[];
  constructor(private embaucherservice: EmbaucherService) {
    this.personnes = this.embaucherservice.listeEmbauher();
  }

  ngOnInit(): void {
  }

}
