import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {

  transform(value: any): string {
    const date: Date = new Date(value);
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();
    const year: number = date.getFullYear();
    return `${this.transformParts(day)}.${this.transformParts(month)}.${year}`;
  }

  transformParts(part: number): string {
    if(part < 10) {
      return `0${part}`;
    } else {
      return `${part}`;
    }
  }

}
