import { AfterViewInit, Component, HostListener } from '@angular/core';

// Import WOW.js
import { WOW } from 'wowjs';

// Import jQuery
import $ from 'jquery';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  
  
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

}
 
