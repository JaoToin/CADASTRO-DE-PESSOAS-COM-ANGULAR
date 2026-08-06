import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private listaDePessoas: Pessoa[] = [];

  adicionar(pessoa: Pessoa) {
    this.listaDePessoas.push(pessoa);
  }

  listar(): Pessoa[] {
    return this.listaDePessoas;
  }
}
