import { AfterViewInit, Component, HostListener } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
// Import WOW.js
import { WOW } from 'wowjs';

// Import jQuery
import $ from 'jquery';
import { MenuItem } from 'primeng/api';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule,DropdownModule,SidebarModule,ButtonModule,CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  sidebarVisible: boolean = true
  items: MenuItem[];
  Menus: MenuItem[];
  constructor(){
    this.items = [
      { label: 'CUTLERY', icon: 'fas fa-utensils' },       
      { label: 'FRENCH TACOS 🌮', icon: '' },              
      { label: 'PIZZAS 🍕', icon: '' },                    
      { label: 'UFO BURGERS 🍔', icon: '' },              
      { label: 'PIZZAS CREPES 🍕', icon: '' },             
      { label: 'CREPES 🧀', icon: '' },    
      { label: 'FRENCH TACOS 🌮', icon: '' },              
      { label: 'PIZZAS 🍕', icon: '' },       
      { label: 'FRENCH TACOS 🌮', icon: '' },              
      { label: 'PIZZAS 🍕', icon: '' },   
                          
                     
    ];
    this.Menus = [
      { name: 'Home' },
      { name: 'About' },
      { name: 'Services' },
      { name: 'Contact' }
    ];
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const numberOfPixels = 600;
    const element = document.getElementById('navId');
    console.log(window.scrollY);
    if (window.scrollY >= numberOfPixels) {
      element?.classList.remove('navbar1');
      element?.classList.add('myClass');
      console.log(element?.classList);
    }else {
      element?.classList.remove('myClass');
      element?.classList.add('navbar1');
    }
  }
  onChange(event: any) {
    // Vous pouvez ajouter le code pour gérer le changement d'élément ici
  }
}
 
