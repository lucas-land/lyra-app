import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticia-edit',
  templateUrl: './noticia-edit.page.html',
  styleUrls: ['./noticia-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, HeaderComponent, FormsModule],
})
export class NoticiaEditPage implements OnInit {

  noticia: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('Noticia ID:', id);

    if (id) {
      this.loadNoticia(id);
    }
  }

  loadNoticia(id: string) {
    const noticiasMock: any = {
      1: {
        imagem: 'https://instagram.fcxj5-1.fna.fbcdn.net/v/t51.82787-15/645777353_18000101753907535_4205471194954932400_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=101&ig_cache_key=Mzg0MzAxNjMwMDkwNjIyNTQ2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNTB4MTY4OC5zZHIuQzMifQ%3D%3D&_nc_ohc=XhJ_BUKwmzsQ7kNvwEcK4Hy&_nc_oc=Adpp-agxDFMRzblko5yCJpcRSS3tG7XI9T9Mxj-sUpoi46jHJTlsz-BhE3xvadTri9I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcxj5-1.fna&_nc_gid=FaGHd9rjpegpWKhMvN4Irg&_nc_ss=7a32e&oh=00_Af0athF5K2dLelAohguiqG6J1WxwTlPM-GWboMsKSUzzGQ&oe=69DE1014',
        titulo: '79 anos de história',
        descricao: 'Tradição que atravessa gerações em Estância Velha. A Sociedade Canto Lyra comemorou recentemente 79 anos de história...',
        conteudo: 'Tradição que atravessa gerações em Estância Velha. A Sociedade Canto Lyra comemorou recentemente 79 anos de história, sendo um dos clubes mais tradicionais da região e um importante espaço de convivência para a comunidade. O clube é conhecido pela forte presença no bolão, esporte que faz parte da identidade da entidade e que ao longo dos anos rendeu importantes conquistas em competições estaduais. Mas a estrutura da Sociedade Canto Lyra vai muito além do esporte. O espaço conta com quadra esportiva, quadra de areia, piscinas, áreas para churrasco e um amplo ambiente para festas e eventos, reunindo famílias, associados e visitantes. A história continua sendo construída. Em março de 2026, o clube será sede da 4ª Copa RS de Bolão Masculino Bola 23, competição que deve reunir equipes de várias regiões do estado.'
      },
      2: {
        imagem: 'https://instagram.fcxj5-1.fna.fbcdn.net/v/t51.82787-15/516949148_17934888087027019_4473895598030673591_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzY3MTYyMTU0MzkyNDEwNTg4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNjV4NzEwLnNkci5DMyJ9&_nc_ohc=LehykBxRBHsQ7kNvwEHR3N2&_nc_oc=Adq5SjCo1Qu2K49m2YuxzDXQ0Ci8Gf26EIp6RbHPOfcwerl_KIzbiQO6YyrQKAfGcGw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcxj5-1.fna&_nc_gid=D67UYAAcFPN4-0srwLIoYg&_nc_ss=7a32e&oh=00_Af3C_ef8j7KNsFVf0mEnbiqGgNb9zVI9lCGGPHZn0Zee9Q&oe=69DE129D',
        titulo: 'Torneio Aberto de Quintetos do Lyra',
        descricao: 'No último sábado, 5 de julho, o Departamento de Bolão da Sociedade de Canto Lyra realizou a primeira edição do Torneio Aberto de Quintetos do Lyra...',
        conteudo: 'No último sábado, 5 de julho, o Departamento de Bolão da Sociedade de Canto Lyra realizou a primeira edição do Torneio Aberto de Quintetos do Lyra, reunindo 29 equipes inscritas de diversas cidades do Vale do Sinos, Encosta da Serra, Serra, Vale do Caí e região, como Garibaldi, Nova Petrópolis, Imigrante, Montenegro, Bento Gonçalves, Caxias do Sul e diversos outros municípios da região. A competição movimentou as dependências do clube durante todo o dia, reunindo atletas, famílias e simpatizantes do bolão em uma jornada de integração entre clubes e fortalecimento da modalidade na região. Classificação Final: 🥇 1º lugar: Sociedade Recreativa Ipiranga, de São Leopoldo 🥈 2º lugar: Clube do Comécio, de Montenegro 🥉 3º lugar: ASUAC Bom Progresso A, de Bom Princípio 4️⃣ 4º lugar: Sociedade Juvenil de Linha Temerária, de Nova Petrópolis 5️⃣ 5º lugar: ASUAC Bom Progresso B, de Bom Princípio 6️⃣ 6º lugar: Sociedade Atiradores Dois Irmãos - SADI, de Dois Irmãos. Premiação Individual Geral: 💪🏻🏅 Braço de Ouro: Inácio da Sociedade Recreativa Ipiranga, com 359 pinos. 💪🏻🥈 Braço de Prata: Marcelino da Assoc. Bom Progresso, com 356 pinos. 💪🏻🥉 Braço de Bronze: Caio da Sociedade Juvenil, com 355 pinos. O Departamento de Bolão da Sociedade de Canto Lyra agradece, de coração, a cada equipe que se inscreveu e abraçou nosso torneio, e também a todos da equipe de trabalho que, com dedicação e parceria, tornaram este evento possível. Obrigado! 💚'
      },
      3: {
        imagem: 'https://instagram.fcxj5-1.fna.fbcdn.net/v/t51.82787-15/588729206_17989716524907535_2816356577547149792_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc3Mzk2ODAwOTM3NjE0NzMwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=7HLVkS519OoQ7kNvwFEJ0cN&_nc_oc=Adou9va4qYgPveIRfUchL_1slCT14KtOSjH_bhnMj6Ro96oRQnCMMN_xvcql05191u0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcxj5-1.fna&_nc_gid=TAq_0pN20uKN1sCu-gq9qg&_nc_ss=7a32e&oh=00_Af2Qzw8aUcWeBN_lpvW6v9kOGKTxse7amq2egekVtBbCEg&oe=69DDF42D',
        titulo: 'Últimos dias de temporada!',
        descricao: 'A temporada de piscinas está chegando ao fim...',
        conteudo: 'Últimos dias de temporada! A temporada de piscinas está chegando ao fim, mas ainda dá tempo de aproveitar o calor e dar aqueles últimos mergulhos! 😎🏊‍♂️ 📅 As piscinas estarão abertas até o dia 15/03 (domingo). Reúna a família, chame os amigos e venha curtir esses últimos dias de verão no clube!'
      }
    };

    this.noticia = noticiasMock[id];
  }

}
