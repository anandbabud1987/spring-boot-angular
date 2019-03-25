import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import {Signup} from '../signup';
import {RestService} from '../rest.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private rest:RestService,private dialog:MatDialog) { }
  visibleSideBar=false;
  model=new Signup('','','','','','');
  ngOnInit() {
  }
  openSignupDialog(){
    const matDialogConfig=new MatDialogConfig();
    matDialogConfig.autoFocus=true;
    matDialogConfig.width='600px';

    const dialogRef = this.dialog.open(DialogSignup,matDialogConfig  );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  reset(){
    this.model=new Signup('','','','','','')
  }

}

@Component({
  selector: 'dialog-signup',
  templateUrl: 'signup-modal.html'//,
  //styleUrls: ['./signup-modal.scss']

})
export class DialogSignup {
  model=new Signup('','','','','','');

  constructor(public dialogRef:MatDialogRef<DialogSignup>,private rest:RestService){


  }
  onSignup(){
    console.log("onSignup",this.model);
    this.rest.signup(this.model).subscribe((data:{})=>{
      console.log(data);
    });
  }

  goToLogin(){
    this.dialogRef.close();
  }
  ngOnInit() {

  }

  close(){
    this.dialogRef.close();
  }
}
