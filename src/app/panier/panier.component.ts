import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DelReference, AddReference } from '../action/panier.action';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private store : Store) { }

  panier_products: Array<any> = [];


  ngOnInit(): void {
    this.store.select(state=>state.panier.panier).subscribe(response => {
      
      console.log(response);
      //this.panier_products = response;
    });
    //console.log(this.panier_products);

  }

}
