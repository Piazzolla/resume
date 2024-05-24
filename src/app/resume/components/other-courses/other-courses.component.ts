import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-other-courses',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './other-courses.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OtherCoursesComponent { }
