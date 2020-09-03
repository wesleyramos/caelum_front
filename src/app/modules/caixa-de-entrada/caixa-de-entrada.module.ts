import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';

@NgModule({
  declarations: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    CaixaDeEntradaRoutingModule
  ]
})
export class CaixaDeEntradaModule { }
