import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'angularize'
})
export class AngularizePipe implements PipeTransform {

  transform(value: any, args?: any, secondArgs?: any): any {

    console.log(args);
    console.log(secondArgs);
    return value + '-angularized';
  }

}
