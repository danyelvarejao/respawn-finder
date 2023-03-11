import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumberWithCommas',
})
export class FormatNumberWithCommasPipe implements PipeTransform {
  transform(value: number): string {
    const formattedValue = Math.floor(value)
      .toString()
      .replace(/,/g, '')
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedValue;
  }
}
