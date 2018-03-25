import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coldCities'
})
export class ColdCitiesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    return value.filter(c => c !== 'chennai');
  }

}
