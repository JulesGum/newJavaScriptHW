import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adder',
})
export class AdderPipe implements PipeTransform {
  transform(
    value: string,
    start: string,
    end: string,
    ...args: string[]
  ): string {
    // console.log(value);
    // console.log(args);
    const res = start + value + end;
    return res;
  }
}
