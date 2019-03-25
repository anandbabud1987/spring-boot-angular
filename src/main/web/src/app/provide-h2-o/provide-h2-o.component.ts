import { Component, OnInit } from '@angular/core';
import {ProvideH2O} from '../provide-h2-o';

@Component({
  selector: 'app-provide-h2-o',
  templateUrl: './provide-h2-o.component.html',
  styleUrls: ['./provide-h2-o.component.scss']
})
export class ProvideH2OComponent implements OnInit {

  constructor() { }
  model=new ProvideH2O('','','','','');
  ngOnInit() {
  }
  signup(){
    console.log('signup clicked',this.model);
  }

}
