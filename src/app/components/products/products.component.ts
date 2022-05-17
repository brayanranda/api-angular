import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('asDetailProduct') detailproduct!: ElementRef;
  public products:Product[] = [];
  check:boolean = true;

  productChosen: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: '',
      name: '',
    }
  }

  constructor(
    private productService:ProductService,
    private renderer2:Renderer2,
  ) { }

  change():void { this.check = !this.check; }

  ngOnInit(): void {
    this.productService.getProblems().subscribe(data => {
      this.products = data;
    })
  }

  onShowDetail(id:string) {
    this.productService.getProblem(id).subscribe(el => {
      this.change();
      this.productChosen = el;
    })
    
  }

}
