import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { BottomNavComponent } from '../../../shared/components/bottom-nav/bottom-nav.component';

const MENSAGEM_PADRAO =
  'Olá! Gostaria de me associar à Sociedade de Canto Lyra e receber mais informações.';

@Component({
  selector: 'app-associar',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderComponent,
    BottomNavComponent,
  ],
  templateUrl: './associar.page.html',
  styleUrls: ['./associar.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AssociarPage {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      mensagem: [MENSAGEM_PADRAO, [Validators.required]],
    });
  }

  enviarAssociacao(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
