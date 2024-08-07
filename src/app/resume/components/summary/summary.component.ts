import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextService } from '../../services/text.service';
import { InfoCardComponent } from "./info-card/info-card.component";
import { CertCardComponent } from "./cert-card/cert-card.component";

@Component({
    selector: 'app-summary',
    standalone: true,
    templateUrl: './summary.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    CommonModule,
    InfoCardComponent,
    CertCardComponent
]
})
export default class SummaryComponent {

  public text;
  constructor( textService: TextService) {
    this.text = textService.getSummaryText();
  }



}
