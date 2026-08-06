import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PessoaService } from '../services/pessoa-service';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './cadastro-pessoa.html',
  styleUrl: './cadastro-pessoa.css',
})

export class CadastroPessoa {
  nome?: string
  email?: string
  cpf?: string
  dataNascimento?: string;
  uf?: string;
  mu?: string;
  listaTabela: Pessoa[] = []

  constructor(private pessoaService: PessoaService){}

  salvar(){
    let novaPessoa = new Pessoa;

    novaPessoa.id = Math.floor(Math.random() * 10000);
    novaPessoa.nome = this.nome || ''
    novaPessoa.email = this.email || ''
    novaPessoa.cpf = this.cpf || ''
    novaPessoa.dataNascimento = this.dataNascimento || ''
    //novaPessoa.uf = this.uf || ''
    //novaPessoa.mu = this.mu || ''

    this.pessoaService.adicionar(novaPessoa);

    this.limparAtributos()

  }







  limparAtributos(){
    this.nome = ''
    this.email = ''
    this.cpf = ''
    this.dataNascimento = ''
    this.uf = ''
    this.mu = ''
  }
}
