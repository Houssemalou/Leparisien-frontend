import { Component, OnInit } from '@angular/core';
import { Product, data } from '../../models/Product' ;
//import { ProductService } from '@service/productservice';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'carousel-circular-demo',
    templateUrl: './carousel-circular-demo.component.html',
    styleUrl: './carousel-circular-demo.component.css',
    standalone: true,
    imports: [CarouselModule, ButtonModule, TagModule],
    providers: []
})
export class CarouselCircularDemo implements OnInit{
    products: Product[] = data;
  


    responsiveOptions: any[] | undefined;

    constructor() {}

    ngOnInit() {
        /*this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });*/

       this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default : 
                return 'warning';
        }
    }
}