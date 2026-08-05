import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroPessoa } from './cadastro-pessoa/cadastro-pessoa';
import { Consulta } from './consulta/consulta';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroPessoa, Consulta, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cadastro-Pessoa');
}
