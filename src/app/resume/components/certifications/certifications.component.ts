import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './certifications.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent { }
