import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'since'
})
export class SincePipe implements PipeTransform {

  transform(value: string): unknown {
    const date = new Date(value);
    const currentDate = new Date();
    const diff = (currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24);
    if (diff < 1) {
      return "Aujourd'hui";
    }
    if (diff < 31) {
      return `Il y a ${Math.trunc(diff)} jour${Math.trunc(diff) === 1 ? '' : 's'}`;
    }
    return `Il y a ${Math.trunc(diff / 31)} mois`;
  }

}
