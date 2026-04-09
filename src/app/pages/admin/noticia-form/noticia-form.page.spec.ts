import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiaFormPage } from './noticia-form.page';

describe('NoticiaFormPage', () => {
  let component: NoticiaFormPage;
  let fixture: ComponentFixture<NoticiaFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
