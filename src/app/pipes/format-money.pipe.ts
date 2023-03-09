import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoney',
})
export class FormatMoneyPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) {
      return '0gp';
    }

    if (Math.abs(value) > 1000) {
      return Math.round(value / 1000) + 'k~';
    } else {
      return value + 'gp';
    }
  }
}
