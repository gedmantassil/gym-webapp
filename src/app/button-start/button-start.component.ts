import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-start',
  templateUrl: './button-start.component.html',
  styleUrls: ['./button-start.component.css']
})
export class ButtonStartComponent {
  constructor(private router: Router){}
  onSelectionClick(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
