import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventosAdminPage } from './eventos-admin.page';

describe('EventosAdminPage', () => {
  let component: EventosAdminPage;
  let fixture: ComponentFixture<EventosAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
