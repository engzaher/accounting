import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  addedItems;
 @Input() total: number;
 returned: number;
 p: Product;
  constructor( private dataSerive: ProductService) {
    this.products = dataSerive.getProducts();
  }

  ngOnInit() {

  }


  removeProduct(product: Product) {
    this.returned = Number.parseInt(product.getQty().toString()) + Number.parseInt(product.getAddedQty().toString()) ;
    product.setQty(this.returned);
    product.setAdded(false);
  }

  addNewProduct(pro: Product , quntity: number ) {
    if (pro.getQty() >= quntity && quntity > 0) {
       pro.setQty( pro.getQty() - quntity);
       pro.setAdded(true);
       pro.setAddedQty(quntity);
    }
  }
  Incr(pro: Product) {
    if (pro.getQty() > 0) {
      pro.setAddedQty(Number.parseInt(pro.getAddedQty().toString()) + 1);
      pro.setQty(pro.getQty() - 1);
    }
  }
  Decr(pro: Product) {
    if (pro.getAddedQty() == 1) {
      this.removeProduct(pro);
    } else {
      pro.setAddedQty(Number.parseInt(pro.getAddedQty().toString()) - 1);
      pro.setQty(Number.parseInt(pro.getQty().toString()) + 1);
    }
  }
  CalculateBill() {
    //this.total = Number.parseInt(this.total.toString());
    this.total = 0;
    for (this.p of this.products) {
      if (this.p.getAdded() === true) {
        this.total += Number.parseInt(this.p.getAddedQty().toString()) * Number.parseInt(this.p.getPrice().toString());
      }
    }
    return this.total.toString();
  }
}
