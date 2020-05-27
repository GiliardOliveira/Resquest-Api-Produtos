import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto = {} as Produto;

  constructor(private _route: ActivatedRoute, private datasService: DataService) { }

  ngOnInit(): void {
    this.getProduto(Number(this._route.snapshot.paramMap.get('id')));
  }

  getProduto(id: number) {
    this.datasService.getByIdProduto(id).subscribe((produto: Produto) => {
      this.produto = produto;
    })
  }

  editarProduto() {
    this.datasService.putProduto(this.produto).subscribe()

  }



}
