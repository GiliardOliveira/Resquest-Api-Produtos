import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Produto } from 'src/app/produto.model';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastrarproduto',
  templateUrl: './cadastrarproduto.component.html',
  styleUrls: ['./cadastrarproduto.component.css']
})
export class CadastrarprodutoComponent implements OnInit {
  ELEMENT_DATA: Produto[];

  nome: Text
  valor: number

  constructor(private datasService: DataService, private formBuilder: FormBuilder) { }


  public createProduto(nome: Text, valor: number) {
    const produto: Produto = <Produto><unknown>{
      "nome": nome,
      "valor": valor
    }
   
    this.postProdutos(produto)
  }


  public postProdutos(np: Produto) {
    this.datasService.postProdutos(np).subscribe()
  }


  ngOnInit(): void {

  }



}
