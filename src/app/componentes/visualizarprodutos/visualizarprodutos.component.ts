import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-visualizarprodutos',
  templateUrl: './visualizarprodutos.component.html',
  styleUrls: ['./visualizarprodutos.component.css']
})
export class VisualizarprodutosComponent implements OnInit {
  produtos$: Produto[];

  constructor(private datasService: DataService) { 


  }

  ngOnInit() {
    return this.datasService.getProdutos()
    .subscribe(data=> this.produtos$ = data);

    //this.datasService.getProdutos().subscribe(console.log);
  }

}
