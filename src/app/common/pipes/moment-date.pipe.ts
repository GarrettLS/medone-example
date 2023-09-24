import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'momentDate' })
export class MomentDatePipe implements PipeTransform {
    transform(value: Date | moment.Moment | string, dateFormat?: string): string {
        return moment(value).format(dateFormat ?? 'L');
    }
}