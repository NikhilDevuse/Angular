import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteringpipesComponent } from './masteringpipes.component';

describe('MasteringpipesComponent', () => {
  let component: MasteringpipesComponent;
  let fixture: ComponentFixture<MasteringpipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasteringpipesComponent]
    });
    fixture = TestBed.createComponent(MasteringpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
