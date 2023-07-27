/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngulartemplentsyntaxComponent } from './angulartemplentsyntax.component';

describe('AngulartemplentsyntaxComponent', () => {
  let component: AngulartemplentsyntaxComponent;
  let fixture: ComponentFixture<AngulartemplentsyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulartemplentsyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulartemplentsyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
