import { Component, OnInit } from '@angular/core';
import { Endereco } from '../domain/endereco';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  cep : string;
  endereco : Endereco;

  constructor( private enderecoService : EnderecoService) { }

  ngOnInit() {
  }

  getCep(){
    this.enderecoService.getEndereco(this.cep)
    .subscribe(responde => {
      this.endereco = responde;
      console.log(this.endereco);
    })
  }
}
