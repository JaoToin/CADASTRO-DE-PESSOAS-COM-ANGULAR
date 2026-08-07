import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PessoaService } from '../services/pessoa-service';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro-pessoa.html',
  styleUrl: './cadastro-pessoa.css',
})

export class CadastroPessoa implements OnInit {
  id?: number;
  nome = '';
  email = '';
  cpf = '';
  dataNascimento = '';
  uf = '';
  mu = '';
  isEditando = false;
  botaoTexto = 'CADASTRAR';

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);

      if (id) {
        this.prepararEdicao(id);
      } else {
        this.limparAtributos();
      }
    });
  }

  salvar() {
    const pessoa = new Pessoa();

    pessoa.id = this.id ?? Math.floor(Math.random() * 10000);
    pessoa.nome = this.nome || '';
    pessoa.email = this.email || '';
    pessoa.cpf = this.cpf || '';
    pessoa.dataNascimento = this.dataNascimento || '';
    pessoa.uf = this.uf || '';
    pessoa.mu = this.mu || '';

    if (this.isEditando) {
      this.pessoaService.atualizar(pessoa);
    } else {
      this.pessoaService.adicionar(pessoa);
    }

    this.router.navigate(['/consulta']);
  }

  prepararEdicao(id: number) {
    const pessoa = this.pessoaService.buscarPorId(id);

    if (pessoa) {
      this.id = pessoa.id;
      this.nome = pessoa.nome ?? '';
      this.email = pessoa.email ?? '';
      this.cpf = pessoa.cpf ?? '';
      this.dataNascimento = pessoa.dataNascimento ?? '';
      this.uf = pessoa.uf ?? '';
      this.mu = pessoa.mu ?? '';
      this.isEditando = true;
      this.botaoTexto = 'ATUALIZAR';
    } else {
      this.limparAtributos();
    }
  }

  limparAtributos() {
    this.id = undefined;
    this.nome = '';
    this.email = '';
    this.cpf = '';
    this.dataNascimento = '';
    this.uf = '';
    this.mu = '';
    this.isEditando = false;
    this.botaoTexto = 'CADASTRAR';
  }
}
