import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent {

  private _isNewEmailFormOpen = false;

  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }
  mensagemErro = '';

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService
      .listar()
      .subscribe(
        //next
        lista => {
          this.emailList = lista;
        },
        //erro
        (responseError: HttpErrorResponse) => {
          this.mensagemErro = responseError.message;
          console.log("Deu ruim");
        },
        //complete (finally)
      )
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {
    if (formEmail.invalid) return;
    this.emailService
      .enviar(this.email)
      .subscribe(
        emailApi => {
          //Fazemos todas as outras operações após o OK da API
          this.emailList.push(emailApi)
          this.email = { destinatario: '', assunto: '', conteudo: '' }
          formEmail.reset();
        }
        , erro => console.error(erro)
      )
  }

}
