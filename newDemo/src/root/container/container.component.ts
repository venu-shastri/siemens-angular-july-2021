import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { ContentchildComponent } from '../contentchild/contentchild.component'
import {VchildComponent} from '../vchild/vchild.component'
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ContentChild("child1")
  child1:ContentchildComponent;

  @ViewChild()
  vchildRef:VchildComponent;



}
