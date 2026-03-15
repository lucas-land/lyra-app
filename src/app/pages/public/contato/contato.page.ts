import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { BottomNavComponent } from '../../../shared/components/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderComponent,
    BottomNavComponent,
  ],
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContatoPage {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      mensagem: ['', [Validators.required]],
    });
  }

  enviarMensagem(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
