import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarprodutoComponent } from './componentes/cadastrarproduto/cadastrarproduto.component';
import { VisualizarprodutosComponent } from './componentes/visualizarprodutos/visualizarprodutos.component';



const routes: Routes = [
  {path: 'cadastrarproduto', component:CadastrarprodutoComponent},
  {path: 'visualizarprodutos', component:VisualizarprodutosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
