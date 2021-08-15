import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { Fruta } from '../models/fruta';
import { CompraService } from '../services/compra.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  items = this.carrinhoService.getItems();

  constructor( private carrinhoService : CarrinhoService, private compraService : CompraService) { }


  limparCarrinho() {
    this.items = [];
    return this.items;
  }

  ngOnInit(){
  }

  
}
