import { Directive,ElementRef,Renderer2 } from "@angular/core";

@Directive({
  selector:'[applyRedColor]'
})
export class ApplyRedColorDirective{

  constructor(private targetElement:ElementRef,private elementProcessor:Renderer2){

    this.elementProcessor.setStyle(this.targetElement.nativeElement,"color","red");
  }
}

