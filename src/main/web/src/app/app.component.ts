import { Component } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'h2o';
  //items:MenuItem[];
  items=[];
  ngOnInit(){
    this.items=[
      {label:'Login',icon:'fa fa-fw fa-bar-chart',routerLink: ['/login']},
      {label:'About Us',icon:'fa fa-fw fa-bar-chart',routerLink: ['/about-us']},
      {label:'Contact Us',icon:'fa fa-fw fa-bar-chart',routerLink:['/contact-us']},
      {label:'Find Car',icon:'fa fa-fw fa-bar-chart',routerLink:['/find-car']},
      {label:'Your Car',icon:'fa fa-fw fa-bar-chart',routerLink:['/list-ur-car']}    ];
  }
}
