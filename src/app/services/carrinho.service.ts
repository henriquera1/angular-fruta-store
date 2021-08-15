import { Injectable } from '@angular/core';
import { Fruta } from '../models/fruta';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  items: Fruta[] = [];
  
  constructor() { }


  addCarrinho(produtos: Fruta) {
    this.items.push(produtos);
  }
  
  getItems() {
    return this.items;
  }

  


}
