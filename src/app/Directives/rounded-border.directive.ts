import { Directive,ElementRef,HostListener  } from '@angular/core';

@Directive({
  selector: '[appRoundedBorder]',
  standalone: true
})
export class RoundedBorderDirective {

  constructor(private ele:ElementRef) {
    // ele.nativeElement.style.backgroundColor="red"
    ele.nativeElement.style.borderRadius = '10px'; 
    ele.nativeElement.style.boxShadow = '0 4px 8px red '; 
   }
  //  @HostListener('mouseOver') over(){
  //  this.ele.nativeElement.style.boxShadow = '8 8px 16px green'
  
  //  }
  //  @HostListener('mouseOut') out(){
  //   this.ele.nativeElement.style.boxShadow = '8 4px 8px red';
   
  //   }

    @HostListener('mouseenter') onMouseEnter() {
      this.ele.nativeElement.style.boxShadow = '0 8px 16px green';
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.ele.nativeElement.style.boxShadow = '0 4px 8px red';
    }

}
