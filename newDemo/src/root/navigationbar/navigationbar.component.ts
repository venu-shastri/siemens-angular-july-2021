import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit,OnDestroy {
  userName:string;
  paramsSubscription:any;
  constructor(public route:ActivatedRoute) {
      this.userName="Unknown";

   }

  ngOnInit(): void {
   this.paramsSubscription=
   this.route.paramMap.subscribe(p=> {
     let name=p.get('username');
     if(name){
       this.userName=name;
     }

  });
  }

  ngOnDestroy():void{
    this.paramsSubscription.unsubscribe();
  }


}
