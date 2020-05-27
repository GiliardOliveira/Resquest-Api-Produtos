import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-consulta-produto',
  templateUrl: './consulta-produto.component.html',
  styleUrls: ['./consulta-produto.component.css']
})
export class ConsultaProdutoComponent implements OnInit {

  produto = {} as Produto;

  id: number

  constructor(private _route: ActivatedRoute, private datasService: DataService) { }

  ngOnInit(): void {
  }
  
  getProduto(id: number) {
    this.datasService.getByIdProduto(id).subscribe((produto: Produto) => {
      this.produto = produto;
    })
  }


}
