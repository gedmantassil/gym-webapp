import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleGroupTableComponent } from './muscle-group-table.component';

describe('MuscleGroupTableComponent', () => {
  let component: MuscleGroupTableComponent;
  let fixture: ComponentFixture<MuscleGroupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuscleGroupTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuscleGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
