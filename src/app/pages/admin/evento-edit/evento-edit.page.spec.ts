import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventoEditPage } from './evento-edit.page';

describe('EventoEditPage', () => {
  let component: EventoEditPage;
  let fixture: ComponentFixture<EventoEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
