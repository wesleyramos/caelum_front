import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { CmailFormModule } from 'src/app/components/cmail-form.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/services/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    CmailFormModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
