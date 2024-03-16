import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Define an interface for the muscle group if it's not already defined elsewhere
export interface MuscleGroup {
  name: string;
  exercises: string[];
} 

@Component({
  selector: 'app-muscle-group-table',
  templateUrl: './muscle-group-table.component.html',
  styleUrls: ['./muscle-group-table.component.css']
})
export class MuscleGroupTableComponent implements OnInit {
  @Input() muscleGroup?: MuscleGroup;
  @Output() close = new EventEmitter<void>(); // Add this line

  constructor() { }

  ngOnInit(): void {
    //
  }

  resetTableVisibility() {
    this.showTable = true;
  }
  showTable: boolean = true; // This controls the visibility of the table

// This function is called when the close button is clicked
  closeTable() {
    this.close.emit();
  }
}
