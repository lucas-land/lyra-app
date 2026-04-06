import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  formatarDataEventoPt,
  getEventoPorId,
  type Evento,
} from '../../../shared/data/eventos.data';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventoPage implements OnInit {
  evento: Evento | undefined;
  dataFormatada = '';
  /** Hero com foto; se false, mostra bloco de data em verde. */
  temImagem = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly location: Location,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : NaN;
    if (Number.isNaN(id)) {
      void this.router.navigate(['/eventos']);
      return;
    }
    this.evento = getEventoPorId(id);
    if (!this.evento) {
      void this.router.navigate(['/eventos']);
      return;
    }
    this.dataFormatada = formatarDataEventoPt(this.evento.data);
    this.temImagem = !!this.evento.imagem?.trim();
  }

  voltar(): void {
    this.location.back();
  }
}
