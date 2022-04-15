import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ticket2PageComponent } from './ticket2-page.component';

describe('Ticket2PageComponent', () => {
  let component: Ticket2PageComponent;
  let fixture: ComponentFixture<Ticket2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ticket2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ticket2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
