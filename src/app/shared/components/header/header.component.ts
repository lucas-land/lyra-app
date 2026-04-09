import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

export type HeaderVariant = 'default' | 'admin' | 'adminAction' | 'adminForm';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() variant: HeaderVariant = 'default';
  @Input() titulo: string | null = null;
  @Input() showBackButton = false;
  /** Quando definido (ex.: páginas de detalhe), o voltar vai para esta rota. Senão, vai para /home. */
  @Input() backHref: string | null = null;
  @Input() sectionName: string = '';
  @Input() sectionButton: string = '';

  @Input() actionRoute: string = '/';   // rota do botão "Novo..."
@Input() backRoute: string = '/dashboard'; // rota do voltar

  constructor(private router: Router) {}

  voltar(): void {
    const url = this.backHref ?? '/home';
    this.router.navigateByUrl(url);
  }

  goToAction() {
    this.router.navigate([this.actionRoute]);
  }

  goBack() {
    this.router.navigate([this.backRoute]);
  }
}
