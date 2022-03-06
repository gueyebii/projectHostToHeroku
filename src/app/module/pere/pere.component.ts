import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  prenom = 'Gueye';
  message: any;
  constructor() { }

  ngOnInit(): void {
  }

  argent(message: any)
  {
    this.message = message;
    alert(message)
  }
  
}
