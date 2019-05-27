import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adharFormat'
})
export class AdharFormatPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if(value.length==12)
    return value.slice(0,3)+'-'+value.slice(4,7)+'-'+value.slice(8,11);
    else
    return value;
  }

}
