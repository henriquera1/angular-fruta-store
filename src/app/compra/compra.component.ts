import { Component, OnInit } from '@angular/core';
import { FrutaService } from '../services/fruta.service';
import { Fruta } from '../models/fruta';
import { NgForm } from '@angular/forms';
import { CarrinhoService } from '../services/carrinho.service';
import { CompraService } from '../services/compra.service';



@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  fruta = {} as Fruta;
  frutas?: Fruta[];
  

  constructor(private frutaService: FrutaService, private carrinhoService : CarrinhoService, private compraService : CompraService) { }

  ngOnInit(): void {
    this.getFrutas();
  }

  updateFruta(fruta: Fruta){
    this.compraService.updateFruta(fruta);
  }
  

  addCarrinho(fruta: Fruta){
    this.carrinhoService.addCarrinho(fruta);
    window.alert('Item adicionado ao carrinho!');
  }

  // Chama o serviço para obtém todas as frutas
  getFrutas() {
    this.frutaService.getFrutas().subscribe((frutas: Fruta[]) => {
      this.frutas = frutas;
    });
  }

  saveFruta(form: NgForm) {
      
    this.fruta.qtdFruta = this.fruta.qtdFruta - 1;
    this.frutaService.updateFruta(this.fruta).subscribe(() => {
    
      });   
    
  }  

}
