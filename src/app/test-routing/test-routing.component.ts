import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-routing',
  templateUrl: './test-routing.component.html',
  styleUrls: ['./test-routing.component.css']
})
export class TestRoutingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToComponent(route: string)
  {
    const link = [route];
    this.router.navigate(link);
  }

}
