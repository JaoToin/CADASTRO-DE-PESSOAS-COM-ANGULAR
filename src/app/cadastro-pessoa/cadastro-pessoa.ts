import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PessoaService } from '../services/pessoa-service';

@Component({
  selector: 'app-cadastro-pessoa',
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './cadastro-pessoa.html',
  styleUrl: './cadastro-pessoa.css',
})
export class CadastroPessoa {
  nome?: string
  email?: string
  cpf?: string
  dataNascimento?: string

  constructor(private pessoaService: PessoaService){}

  save(){
    this.pessoaService.adcionar({
      id: 1,
      nome: this.nome,
      email: this.email,
      dataNascimento: this.dataNascimento
    })
  }
}
