import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.page.html',
  styleUrls: ['./evento-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, HeaderComponent, FormsModule],
})
export class EventoEditPage implements OnInit {

  evento: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('Evento ID:', id);

    if (id) {
      this.loadEvento(id);
    }
  }

  loadEvento(id: string) {
    const eventosMock: any = {
      1: {
        titulo: 'Baile da Melhor Idade',
        data: '2026-04-12',
        local: 'Sociedade de Canto Lyra - Salão Social',
        descricao: 'Um momento especial pra dançar, se divertir e aproveitar boa música com quem faz a vida mais leve.',
        conteudo: '✨ Vem aí o Baile da Melhor Idade! ✨ Um momento especial pra dançar, se divertir e aproveitar boa música com quem faz a vida mais leve 💙 🎶 Animação com @triomielke 📅 Dia 12 de abril ⏰ A partir das 13h30 💰 Ingresso: R$ 15,00 (não sócios) 🍽️ Reservas de almoço com a Marli 📲 (51) 99533-1319 📍 Sociedade de Canto Lyra – Estância Velha; Chama os amigos, prepara o sorriso e vem aproveitar essa tarde cheia de alegria! 💃🕺'
      },
      2: {
        titulo: '20º Baile de Kerb - De volta às origens!',
        data: '2026-04-25',
        local: 'Sociedade de Canto Lyra - Salão Social',
        descricao: 'Prepare-se para uma noite incrível com muita tradição, alegria e música boa!',
        conteudo: '🎉🍻 Vem aí o 20º Baile de Kerb – De volta às origens! 🍻🎉 Prepare-se para uma noite incrível com muita tradição, alegria e música boa! 🇩🇪✨ 🎶 Animação da @superbandasantacruz 💃 Deutsche Musik pra ninguém ficar parado! 📅 25 de abril 📍 sociedade de Canto Lyra - Estância Velha ⏰ Programação: • Recepção e Culto: 19h30 • Início do Baile: 22h30 🎟️ Ingressos: • Antecipado: R$ 20,00 • No dia: R$ 25,00 • Sócios entrada franca 🍺 Barril de chopp disponível no evento! 👉 Garanta já o seu ingresso e venha celebrar essa tradição com a gente! Marque os amigos e bora pro Kerb! 🇩🇪🔥'
      },
      3: {
        titulo: 'Baile do Rei e Rainha',
        data: '2026-09-19',
        local: 'Sociedade de Canto Lyra - Salão Social',
        descricao: 'É oficial 💚 19 de setembro tem baile do Rei e Rainha 👑',
        conteudo: 'É oficial 💚 19 de setembro tem baile do Rei e Rainha 👑 se prepara que vai ser especial! Em breve mais informações...'
      }
    };

    this.evento = eventosMock[id];
  }

}