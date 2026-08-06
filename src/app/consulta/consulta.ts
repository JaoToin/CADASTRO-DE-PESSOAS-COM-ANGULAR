import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../services/pessoa-service';



@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './consulta.html',
  styleUrl: './consulta.css',
})
export class Consulta implements OnInit{

  listaTabela: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.listaTabela = this.pessoaService.listar()
  }
}
