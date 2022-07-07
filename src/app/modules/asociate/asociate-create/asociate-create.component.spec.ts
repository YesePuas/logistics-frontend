import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociateCreateComponent } from './asociate-create.component';

describe('AsociateCreateComponent', () => {
  let component: AsociateCreateComponent;
  let fixture: ComponentFixture<AsociateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociateCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsociateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
