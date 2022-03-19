import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangebg]'
})
export class ChangebgDirective {


  @Input() isCorrect :Boolean =false;

  constructor(private elRef :ElementRef,private render:Renderer2) { }

  @HostListener('click') answer(){
    if (this.isCorrect) {
      this.render.setStyle(this.elRef.nativeElement,'background','green');
      this.render.setStyle(this.elRef.nativeElement,'color','#fff');
      this.render.setStyle(this.elRef.nativeElement,'border','1px solid white');
    }
    else
    {
      this.render.setStyle(this.elRef.nativeElement,'background','red');
      this.render.setStyle(this.elRef.nativeElement,'color','#fff');
      this.render.setStyle(this.elRef.nativeElement,'border','2px solid grey');
    }
  }
}
