import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-noticia-form',
  templateUrl: './noticia-form.page.html',
  styleUrls: ['./noticia-form.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, HeaderComponent],
})
export class NoticiaFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
