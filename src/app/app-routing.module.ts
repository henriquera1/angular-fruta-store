import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrutaComponent } from './fruta/fruta.component';
import { CompraComponent } from './compra/compra.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';


const routes: Routes = [
  { path: 'fruta', component: FrutaComponent},
  { path: 'compra', component: CompraComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 