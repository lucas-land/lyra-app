import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { BottomNavComponent } from '../../../shared/components/bottom-nav/bottom-nav.component';
import { CardNoticiaComponent } from '../../../shared/components/card-noticia/card-noticia.component';
import { CardEventoComponent } from '../../../shared/components/card-evento/card-evento.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    HomePageRoutingModule,
    HeaderComponent,
    BottomNavComponent,
    CardNoticiaComponent,
    CardEventoComponent,
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
