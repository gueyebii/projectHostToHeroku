import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRaindbow]'
})
export class RaindbowDirective {

  tableau = [
    'black',
    'green',
    'gray',
    'blue',
    'red',
    'orange',
    'yellow',
    'pink',
    'purple',
    'gold',
  ];

  @HostBinding('style.borderColor')  bc: any;
  @HostBinding('style.color') color: any;
  constructor() { }

  @HostListener('keypress') changecolor(){
    const index = Math.floor(Math.random() * (this.tableau.length -1));
    this.bc = this.tableau[index];
    this.color = this.tableau[index];
  }
}


