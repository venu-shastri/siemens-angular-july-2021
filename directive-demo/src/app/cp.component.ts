import { Component } from '@angular/core';

@Component({
   selector: 'app-cp',
   templateUrl: './cp.component.html',
   styles: ['.abc {color: red; font-size: 20px}']
})
export class CPComponent {

  names:Array<string>;
  constructor(){
    this.names=new  Array<string>();
    this.names.push("One");
    this.names.push("Two");
    this.names.push("Three");
    this.names.push("Four");
    this.names.push("Five");

  }
}
