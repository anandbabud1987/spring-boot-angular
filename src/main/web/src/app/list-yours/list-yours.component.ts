import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
}
  from '@angular/forms';
import {Observable,of} from 'rxjs';
import {ListBike} from '../list-bike';
import {Config} from '../config';
import {RestService} from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-yours',
  templateUrl: './list-yours.component.html',
  styleUrls: ['./list-yours.component.scss']
})
export class ListYoursComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {

  }
  openListYourBikeModal(){
    const matDialogConfig=new MatDialogConfig();
    matDialogConfig.autoFocus=true;
    matDialogConfig.width='1000px';

    const dialogRef = this.dialog.open(DialogContentListYourBike,matDialogConfig  );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}




@Component({
  selector: 'dialog-list-your-bike',
  templateUrl: 'list-ur-bike-modal.html',
  styleUrls: ['./list-ur-bike-modal.scss']

})
export class DialogContentListYourBike {
  model=new ListBike(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '');
  yourBikeForm:FormGroup;
  apikey="AIzaSyAs3l3im4xHbA5TKfDvDO-NGYIDAI-mupQ";
  contactDetailForm:FormGroup;
  isLinear=false;
  finished=false;
  countries;
  states;
  hideProvince=false;
  makes;
  models;
  years;
  countryCodedisable=false;
  //issuingCountries=[];
  error;
  constructor(
    public dialogRef:MatDialogRef<DialogContentListYourBike>,
    private rest:RestService,
    private httpService:HttpClient
  ){


  }
  ngOnInit() {

    this.httpService.get('./assets/json/country.json').subscribe(
      data => {
        this.countries = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );


    this.httpService.get('./assets/json/year.json').subscribe(
      data => {
        this.years = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    this.httpService.get('./assets/json/make-model.json').subscribe(
      data => {
        this.makes = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

  getCountry(){
        return this.rest.getConfig('COUNTRY');
  }

  getMake(){
    return this.rest.getConfig('MAKE');
  }

  getModel(){
    return this.rest.getConfig('MODEL');
  }

  saveYourCar(){
    console.log(this.model);
  }


  onChangeCountry(event){
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    if(this.model.licenseIssueCountry==='IN'){
      this.hideProvince=true;
      this.httpService.get('./assets/json/india-states.json').subscribe(
        data => {
          this.states = data as string [];	 // FILL THE ARRAY WITH DATA.
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }
    else if(this.model.licenseIssueCountry==='US'){
      this.hideProvince=true;
      this.httpService.get('./assets/json/us-states.json').subscribe(
        data => {
          this.states = data as string [];	 // FILL THE ARRAY WITH DATA.
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }
    else{
      this.hideProvince=false;
    }
    if(selectedData){
        var country=this.countries;
        for(var i=0;i<country.length;i++){
          if(country[i].alpha2Code===selectedData.value){
            this.model.countryCode=country[i].callingCodes[0];
            this.countryCodedisable=true;
          }
        }
      }
    }

  onChangeMake(event){
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    if(selectedData){
        var makes=this.makes;
        for(var i=0;i<makes.length;i++){
          if(makes[i].value===selectedData.value){
            this.models=makes[i].models;
          }
        }
      }
  }

  onChangeModel(event){
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    console.log(selectedData);

  }
  close(){
    this.dialogRef.close();
  }


  finalPage(){
    this.finished=true;
  }
}
