import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountDetailsComponent } from './edit-account-details.component';

describe('EditAccountDetailsComponent', () => {
  let component: EditAccountDetailsComponent;
  let fixture: ComponentFixture<EditAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
