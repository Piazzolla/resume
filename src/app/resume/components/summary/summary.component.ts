import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './summary.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SummaryComponent {

  public text;
  constructor( textService: TextService) {
    this.text = textService.getSummaryText();
  }



}
