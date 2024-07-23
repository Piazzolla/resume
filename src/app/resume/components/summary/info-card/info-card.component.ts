import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'summary-info-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './info-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent {
  @Input() title: string = 'Title';
  @Input() subtitle: string = 'Subtitle';
  @Input() description: string = 'Description';
  @Input() logo: string = 'logo';
  @Input() years: string = '0';

 }
