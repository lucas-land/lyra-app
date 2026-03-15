import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card-evento',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.scss'],
})
export class CardEventoComponent {
  @Input() data = '';
  @Input() dataDia = '';
  @Input() dataMes = '';
  @Input() dataAno = '';
  @Input() titulo = '';
  @Input() local = '';
  @Input() descricao = '';
  @Input() id: string | number = '';
  @Output() verMais = new EventEmitter<string | number>();
}
