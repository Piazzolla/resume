import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Experience } from '../../../types/experience';

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

  @Input() experience!: Experience;

 }
