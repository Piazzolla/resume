import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Certification } from '../../../types/experience';

@Component({
  selector: 'summary-cert-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cert-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertCardComponent {
  @Input() certification!: Certification;
 }
