import { Component, OnInit } from '@angular/core';
import { Product, data } from '../../models/Product' ;
//import { ProductService } from '@service/productservice';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
@Component({
    selector: 'carousel-circular-demo',
    templateUrl: './carousel-circular-demo.component.html',
    styleUrl: './carousel-circular-demo.component.css',
    standalone: true,
    imports: [CarouselModule, ButtonModule, TagModule,SidebarModule,ButtonModule],
    providers: []
})
export class CarouselCircularDemo implements OnInit{
    products: Product[] = data;
 
  


    responsiveOptions: any[] | undefined;

    constructor() {
        
    }

    ngOnInit() {
    

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