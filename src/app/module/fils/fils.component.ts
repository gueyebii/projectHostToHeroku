import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() prenomFils: string;
  @Output() askMoney = new EventEmitter();
  message = "dad give me money please ";
  constructor() { 
    this.prenomFils = '';
  }

  ngOnInit(): void {
    console.log("le prenom du fils est de : ",this.prenomFils);
  }

  demandeArgent()
  {
    this.askMoney.emit(this.message);
  }


}
