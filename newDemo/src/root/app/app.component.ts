import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None


})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
