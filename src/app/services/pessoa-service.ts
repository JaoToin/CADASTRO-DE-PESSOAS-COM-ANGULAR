import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private listaDePessoas: Pessoa[] = [];

  adicionar(pessoa: Pessoa) {
    if (!pessoa.id) {
      pessoa.id = Date.now();
    }

    const jaExiste = this.listaDePessoas.some((item) => item.id === pessoa.id);
    if (!jaExiste) {
      this.listaDePessoas.push(pessoa);
    }
  }

  listar(): Pessoa[] {
    return this.listaDePessoas;
  }

  buscarPorId(id?: number): Pessoa | undefined {
    return this.listaDePessoas.find((pessoa) => pessoa.id === id);
  }

  atualizar(pessoa: Pessoa) {
    const index = this.listaDePessoas.findIndex((item) => item.id === pessoa.id);

    if (index >= 0) {
      this.listaDePessoas[index] = { ...this.listaDePessoas[index], ...pessoa };
    }

    return pessoa;
  }

  remover(id?: number) {
    this.listaDePessoas = this.listaDePessoas.filter((pessoa) => pessoa.id !== id);
  }
}
