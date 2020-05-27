import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto.model';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-visualizarprodutos',
  templateUrl: './visualizarprodutos.component.html',
  styleUrls: ['./visualizarprodutos.component.css']
})

export class VisualizarprodutosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'valor', 'delete', 'editar'];
  ELEMENT_DATA: Produto[];
  dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);

  constructor(private datasService: DataService) {
  }

  public getProdutos() {
    let resp = this.datasService.getProdutos();
    resp.subscribe(data => this.dataSource.data = data as Produto[])

  }

  ngOnInit() {
    this.getProdutos()
  }

  public delete(element: Produto) {
    this.getProdutos()

    this.remover(element)

  }

  public remover(element: Produto) {
    let resp = this.datasService.deleteProduto(element);
    resp.subscribe(data => this.dataSource.data = data as Produto[])
    this.getProdutos()
  }


}
