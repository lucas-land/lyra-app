import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  formatarDataNoticiaPt,
  getNoticiaPorId,
  type Noticia,
} from '../../../shared/data/noticias.data';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NoticiaPage implements OnInit {
  noticia: Noticia | undefined;
  dataFormatada = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly location: Location,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : NaN;
    if (Number.isNaN(id)) {
      void this.router.navigate(['/noticias']);
      return;
    }
    this.noticia = getNoticiaPorId(id);
    if (!this.noticia) {
      void this.router.navigate(['/noticias']);
      return;
    }
    this.dataFormatada = formatarDataNoticiaPt(this.noticia.data);
  }

  voltar(): void {
    this.location.back();
  }
}
