import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.page.html',
  styleUrls: ['./evento-form.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, HeaderComponent],
})
export class EventoFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
