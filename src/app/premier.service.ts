import { Injectable } from '@angular/core';

@Injectable(
 { providedIn: 'root'}
)
export class PremierService {

  data = [
    'data1',
    'data2',
    'data3',
    'data4',
    'data5'
  ]

  constructor() { }

  logger(data: any)
  {
    console.log(data);
    console.log(this.data);
  }

  addData(data: string){
     this.data.push(data);
  }

}


