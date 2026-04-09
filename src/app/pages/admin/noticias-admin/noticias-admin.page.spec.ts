import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiasAdminPage } from './noticias-admin.page';

describe('NoticiasAdminPage', () => {
  let component: NoticiasAdminPage;
  let fixture: ComponentFixture<NoticiasAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
