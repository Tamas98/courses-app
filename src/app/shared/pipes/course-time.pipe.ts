import { stringify } from "@angular/compiler/src/util";
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name: 'courseTime'})
export class CourseTimePipe implements PipeTransform {
  transform(value: number): string {
    let hours: number = Math.floor(value / 60);
    let mins: number = value % 60;

    let hoursString: string = this.formatNumber(hours);
    let minuteString: string = this.formatNumber(mins);

    return `${hoursString}:${minuteString}`;
  }

  private formatNumber(time: number): string {
    if(time < 10) {
      return `0${time}`;
    }
    return `${time}`;
  }
}
