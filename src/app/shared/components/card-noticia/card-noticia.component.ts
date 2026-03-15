import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card-noticia',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.scss'],
})
export class CardNoticiaComponent {
  @Input() imagem = '';
  @Input() titulo = '';
  @Input() descricao = '';
  @Input() data = '';
  @Input() id: string | number = '';
  @Output() verMais = new EventEmitter<string | number>();
}
