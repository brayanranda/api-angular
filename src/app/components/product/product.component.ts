import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import SwiperCore from 'swiper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product ={
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: '',
      name: '',
    }
  };
  // Enviamos al padre
  @Output() showDetail = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onShowDetail():void {
    // Enviamos el id, para saber que producto mostrar
    this.showDetail.emit(this.product.id)
  }

}
