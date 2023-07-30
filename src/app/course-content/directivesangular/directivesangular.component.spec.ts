import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesangularComponent } from './directivesangular.component';

describe('DirectivesangularComponent', () => {
  let component: DirectivesangularComponent;
  let fixture: ComponentFixture<DirectivesangularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesangularComponent]
    });
    fixture = TestBed.createComponent(DirectivesangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
