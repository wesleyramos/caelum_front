import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { FiltroPorAssunto } from '../caixa-de-entrada/filtro-por-assunto.pipe';

@NgModule({
  declarations: [CaixaDeEntradaComponent, FiltroPorAssunto],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    CaixaDeEntradaRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule { }
