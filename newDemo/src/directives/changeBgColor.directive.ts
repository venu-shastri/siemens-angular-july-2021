import {Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
selector: '[appChbgcolor]'
})
export class ChangeBgColorDirective {
constructor(private ele: ElementRef, private renderer: Renderer2){

}

    // Direct acess  to host element property
    // example - border property of hostelement accessed
@HostBinding('style.border') border: any;

@HostListener('mouseover')
onMouseOver() {
    	this.changeBackgroundColor('red');
		this.border = '5px solid green';
}

@HostListener('click')
 onClick() {
    window.alert('Element clicked!');
 }

    //bind eventhandler with hostelement event
@HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('green');
	this.border = '5px solid yellow';
}

changeBackgroundColor(color: string){
		this.renderer.setStyle(this.ele.nativeElement, 'color', color);
	    this.border = '5px solid yellow';
}
}
