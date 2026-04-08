import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-eventos-admin',
  templateUrl: './eventos-admin.page.html',
  styleUrls: ['./eventos-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, HeaderComponent],
})
export class EventosAdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
