import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-start',
  templateUrl: './button-start.component.html',
  styleUrls: ['./button-start.component.css']
})
export class ButtonStartComponent {
  constructor(private router: Router){}

  // method receives path from html and sends it to the router
  onSelectionClick(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
