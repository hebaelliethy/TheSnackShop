import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackDetailsComponent } from './snack-details.component';

describe('SnackDetailsComponent', () => {
  let component: SnackDetailsComponent;
  let fixture: ComponentFixture<SnackDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
