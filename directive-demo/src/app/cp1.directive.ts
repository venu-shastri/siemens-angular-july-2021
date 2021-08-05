import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
     selector: '[cp1]'
})
export class CP1Directive {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }

   listItems:any;
   @Input() set cp1(items:any){
      this.listItems=items;
   };
   @HostListener('click')
   performTask() {
     console.log(this.listItems);
     for(let i=0;i<this.listItems.length;i++){
	 const li = this.renderer.createElement('li');
     //const text = this.renderer.createText('Click here to add li');
     const text= this.renderer.createText(this.listItems[i]);
     this.renderer.appendChild(li, text);
     this.renderer.appendChild(this.elRef.nativeElement, li);
     }
   }
}
