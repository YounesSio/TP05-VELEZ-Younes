import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DelReference, AddReference } from '../action/panier.action';
import { Product } from '../model/product';

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
      this.panier_products = response;
      // console.log(response);
      // console.log(this.panier_products);
      //this.panier_products = response;
    });
    //console.log(this.panier_products);

  }

  removePanier(p: Product) {
    console.log (p);
    this.store.dispatch (new DelReference ({"reference":p.ref, id: p.id,name: p.name, price: p.price}));
    this.ngOnInit();
   // this.store.dispatch(new AddReference({reference: p.ref, name: p.name}));
  }

}
