import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalId',
  standalone: true
})
export class NationalIdPipe implements PipeTransform {

  transform(value: string , datePart: 'YY' | 'MM' | 'DD' | 'DD-MM-YY'): string {
    var fst=value[0]
    var birthYear = parseInt(value.substring(1, 3), 10);  //99
    var birthMonth = value.substring(3, 5);
    var birthDay = value.substring(5, 7);
console.log(birthDay,birthMonth,birthYear);
    let fullYear = 0;
    if (fst =="2") {
      fullYear = 1900 + birthYear ;
    }else{
      fullYear = birthYear + 2000
    }
    var bitthdate= birthDay + "/" + birthMonth + "/" + fullYear; 
    switch (datePart) {
      case 'YY':
        return fullYear.toString();
      case 'MM':
        return birthMonth;
      case 'DD':
        return birthDay;
      case 'DD-MM-YY':
        return bitthdate 
        default:
          return bitthdate;
    }
   

  }

}
