import { Injectable } from '@angular/core';
import summary_text from '../../../assets/text/summary.json'

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  getSummaryText() {
    return summary_text;
  }

}
