import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//


//Modulos Angular Material
import { MatToolbarModule } from'@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { CadastrarprodutoComponent } from './componentes/cadastrarproduto/cadastrarproduto.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { VisualizarprodutosComponent } from './componentes/visualizarprodutos/visualizarprodutos.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import {MatTableModule} from '@angular/material/table';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    CadastrarprodutoComponent,
    RootNavComponent,
    VisualizarprodutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //API CONECT
    HttpClientModule,


    // Materiais
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
