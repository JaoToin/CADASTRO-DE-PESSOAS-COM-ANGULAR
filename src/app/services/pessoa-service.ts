import { Injectable } from "@angular/core";
import { Pessoa } from "../models/pessoa";

@Injectable({
    providedIn: 'root',
})
export class PessoaService {

    private pessoas: Pessoa[] = []

    adcionar(pessoa: Pessoa){
        this.pessoas.push(pessoa)
    }

    listar(){
        return this.pessoas
    }
}
