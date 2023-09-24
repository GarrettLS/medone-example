import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Custom date pipe using moment
 */
@Pipe({ name: 'momentDate' })
export class MomentDatePipe implements PipeTransform {
  /**
   * transforms a Date, Moment object, or string to a formatted string
   * @returns default format L or set format
   */
    transform(value: Date | moment.Moment | string, dateFormat?: string): string {
        return moment(value).format(dateFormat ?? 'L');
    }
}