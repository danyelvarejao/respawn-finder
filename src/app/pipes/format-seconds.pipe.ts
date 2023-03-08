import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSeconds',
})
export class FormatSecondsPipe implements PipeTransform {
  transform(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (minutes > 10) {
      return `${minutes}m`;
    } else if (minutes > 0) {
      if (remainingSeconds === 0) {
        return `${minutes}m`;
      } else if (remainingSeconds < 10) {
        return `${minutes}m0${remainingSeconds}s`;
      } else {
        return `${minutes}m${remainingSeconds}s`;
      }
    } else {
      return `${remainingSeconds}s`;
    }
  }
}
