import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codePipe',
  standalone: true
})
export class CodePipePipe implements PipeTransform {

  transform(value: string): string | null {
   
    return value.replace(/(.{4})/g, '$1 - ').trim();
  }

}
