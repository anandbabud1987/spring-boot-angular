import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FindBikeComponent} from './find-bike/find-bike.component';
import {ProvideH2OComponent} from './provide-h2-o/provide-h2-o.component';
import {LoginComponent} from './login/login.component';
import { ListYoursComponent } from './list-yours/list-yours.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'contact-us',component:ContactUsComponent},
  {path:'find-car',component:FindBikeComponent},
  {path:'list-ur-car',component:ListYoursComponent},
  {path:'login',component:LoginComponent},
  { path: '**', component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
