import { Pipe, PipeTransform } from '@angular/core';
import { Individu } from "../model/individu.model";

@Pipe({
  name: 'individu'
})
export class IndividuPipe implements PipeTransform {

  transform(individu?: Individu): string {
    if (!individu) {
      return '';
    }
    return individu.firstname + (individu.surname ? ' ' + individu.surname : '');
  }
}
