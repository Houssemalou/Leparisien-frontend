import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nav-category',
  standalone: true,
  imports: [TabMenuModule,ButtonModule],
  templateUrl: './nav-category.component.html',
  styleUrl: './nav-category.component.css'
})
export class NavCategoryComponent implements OnInit {

  items!: MenuItem[];

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
        { label: 'French Tacos 🌮', icon: 'pi pi-pizza' },
        { label: 'Pizzen 🍕', icon: 'pi pi-pancake' },
        { label: 'UFO-Burger 🍔', icon: 'pi pi-hamburger'},
        { label: 'Pizzen-Crepes 🍕', icon: 'pi pi-soda' },
        { label: 'Crepes 🧀', icon: 'pi pi-soda' },
        { label: 'Süße Crepes 🥞', icon: 'pi pi-soda' },
        { label: 'Waffeln 🧇', icon: 'pi pi-soda' }
    ];

    this.activeItem = this.items[0];
}

onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
}

@HostListener('window:scroll', ['$event'])
onScroll(event: Event) {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const activeLabel = section.getAttribute('data-label');
            const activeItem = this.items?.find(item => item.label === activeLabel);
            if (activeItem) {
                this.activeItem = activeItem;
            }
        }
    });
}
@HostListener('window:scroll', [])
  onWindowScroll() {
    const numberOfPixels = 1000;
    const element = document.getElementById('navCategory');
    console.log(window.scrollY);
    if (window.scrollY >= numberOfPixels) {
      element?.classList.add('categoryItem');
      console.log(element?.classList);
    }/*else {
      element?.classList.remove('myClass');
      element?.classList.add('navbar1');
    }*/
  }
}
