import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBarComponent } from "../../shared/components/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'resume-home',
    standalone: true,
    templateUrl: './home.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        SideBarComponent,
        RouterOutlet
    ]
})
export default class HomeComponent { }
