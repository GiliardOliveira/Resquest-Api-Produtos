import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarprodutoComponent } from './componentes/cadastrarproduto/cadastrarproduto.component';
import { VisualizarprodutosComponent } from './componentes/visualizarprodutos/visualizarprodutos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ConsultaProdutoComponent } from './componentes/consulta-produto/consulta-produto.component';



const routes: Routes = [
  { path: 'cadastrarproduto', component: CadastrarprodutoComponent },
  { path: 'visualizarprodutos', component: VisualizarprodutosComponent },
  { path: 'editarprodutos/:id', component: EditarProdutoComponent },
  { path: 'visualizarproduto', component: VisualizarprodutosComponent },
  { path: 'consultaproduto', component: ConsultaProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
