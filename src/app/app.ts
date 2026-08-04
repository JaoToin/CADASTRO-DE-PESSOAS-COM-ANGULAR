import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroPessoa } from './cadastro-pessoa/cadastro-pessoa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroPessoa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cadastro-Pessoa');
}
