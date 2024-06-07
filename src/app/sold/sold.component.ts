import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Product, data } from '../../models/Product';
@Component({
  selector: 'app-sold',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './sold.component.html',
  styleUrl: './sold.component.css'
})
export class SoldComponent {
  products: Product[]=data;

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
  

  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
              return 'kl'
      }
  }
}
