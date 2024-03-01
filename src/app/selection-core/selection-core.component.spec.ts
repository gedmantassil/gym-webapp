import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCoreComponent } from './selection-core.component';

describe('SelectionCoreComponent', () => {
  let component: SelectionCoreComponent;
  let fixture: ComponentFixture<SelectionCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionCoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
