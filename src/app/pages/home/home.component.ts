import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBarComponent } from "../../shared/components/side-bar/side-bar.component";

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
        SideBarComponent
    ]
})
export class HomeComponent { }
