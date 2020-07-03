import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetgirlComponent } from './petgirl.component';

describe('PetgirlComponent', () => {
  let component: PetgirlComponent;
  let fixture: ComponentFixture<PetgirlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetgirlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetgirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
