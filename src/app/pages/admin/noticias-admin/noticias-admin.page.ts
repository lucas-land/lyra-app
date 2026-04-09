import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-noticias-admin',
  templateUrl: './noticias-admin.page.html',
  styleUrls: ['./noticias-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, HeaderComponent],
})
export class NoticiasAdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
