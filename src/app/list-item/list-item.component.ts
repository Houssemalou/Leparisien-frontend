import { Component } from '@angular/core';
import { Product, data } from '../../models/Product';
//import { ProductService } from '@service/productservice';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  products: Product[] = data;

  getSeverity (product: Product) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return undefined;
    }
};

}
