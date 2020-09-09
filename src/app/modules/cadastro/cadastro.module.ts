import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { CmailFormModule } from '../../components/cmail-form-group/cmail-form.module';
import { CadastroRoutingModule } from '../cadastro/cadastro-routing.module';
import { CaixaDeEntradaRoutingModule } from '../caixa-de-entrada/caixa-de-entrada-routing.module';
import { LoginRoutingModule } from '../login/login-routing.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentsModule,
    CmailFormModule,
    CadastroRoutingModule,
    LoginRoutingModule,
    CaixaDeEntradaRoutingModule
  ]
})
export class CadastroModule { }
