import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';
import { Store } from '@ngxs/store';
import { Product } from '../model/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ServiceService, private store: Store) { }

  ref : string = "";
  products = new Array<Product>();
  ngOnInit(): void {
    this.ref = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'));


    this.service.getData().subscribe(response => {
      this.products = response.filter(product => product.id == Number(this.ref))
    });
    console.log(this.products);
  }

}
