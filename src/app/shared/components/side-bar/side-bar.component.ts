import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './side-bar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  @Input()
  public menuItems = [
    'About Me',
    'Experience',
    'Education',
    'Certifications',
    'Languajes',
    'Other Courses'
  ]
 }
