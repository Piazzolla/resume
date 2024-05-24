import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
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

  public menuItems = routes
  .map(route => route.children ?? [])
  .flat()
  .filter( route => route && route.path)

  constructor() {

  }


  // public menuItems = [
  //   'Summary',
  //   'About Me',
  //   'Experience',
  //   'Education',
  //   'Certifications',
  //   'Languajes',
  //   'Other Courses'
  // ]
 }
