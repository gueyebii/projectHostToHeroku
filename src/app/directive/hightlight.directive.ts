import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})

export class HightlightDirective {


  tableau  = [
    'gray',
    'pink',
    'yellow',
    'lightpink',
    'white'
  ]

  @HostBinding('style.backgroundColor')  bg = this.tableau[4];

  constructor() { }

   @HostListener('mouseenter') mouseenter()
   {
    this.bg =  "#EBFAEA";
   }


  @HostListener('mouseleave') mouseleave()
  {
    this.bg = this.tableau[4]
  }


}
