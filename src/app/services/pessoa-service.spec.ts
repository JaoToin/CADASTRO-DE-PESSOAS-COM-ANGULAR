import { TestBed } from '@angular/core/testing';

import { Pessoa } from '../models/pessoa';
import { PessoaService } from './pessoa-service';

describe('PessoaService', () => {
  let service: PessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add, update and remove persons', () => {
    const pessoa = new Pessoa();
    pessoa.id = 1;
    pessoa.nome = 'Ana';
    pessoa.email = 'ana@email.com';

    service.adicionar(pessoa);
    expect(service.listar()).toHaveLength(1);

    const atualizada = { ...pessoa, nome: 'Ana Silva' };
    service.atualizar(atualizada);
    expect(service.listar()[0].nome).toBe('Ana Silva');

    service.remover(1);
    expect(service.listar()).toHaveLength(0);
  });
});
