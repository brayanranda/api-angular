import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products:Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProblems().subscribe(data => {
      this.products = data;
    })
  }

}
