import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
  FormsModule
}
  from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GetH2OComponent } from './get-h2-o/get-h2-o.component';
import { ProvideH2OComponent } from './provide-h2-o/provide-h2-o.component';
import { LoginComponent,DialogSignup } from './login/login.component';
import {SidebarModule} from 'primeng/sidebar';
import { ListYoursComponent,DialogContentListYourBike } from './list-yours/list-yours.component';
import { FindBikeComponent } from './find-bike/find-bike.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    GetH2OComponent,
    ProvideH2OComponent,
    LoginComponent,
    ListYoursComponent,
    DialogContentListYourBike,
    FindBikeComponent,
    DialogSignup,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    InputTextModule,
    ButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    SidebarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogContentListYourBike,
    DialogSignup
  ]

})
export class AppModule { }
