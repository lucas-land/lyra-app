import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { NOTICIAS, type Noticia } from '../../../shared/data/noticias.data';
import { EVENTOS, type Evento } from '../../../shared/data/eventos.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;

  /** Destaques: duas notícias mais recentes (mesmo cadastro da lista completa). */
  noticias: Noticia[] = NOTICIAS.slice(0, 2);

  /** Mesmos eventos da lista completa (destaques na home). */
  eventos: Evento[] = EVENTOS;

  constructor(private readonly router: Router) {}

  ionViewDidEnter(): void {
    this.content?.scrollToTop(0);
  }

  onVerMaisNoticia(id: string | number): void {
    void this.router.navigate(['/noticia', id]);
  }

  onVerMaisEvento(id: string | number): void {
    void this.router.navigate(['/evento', id]);
  }
}
