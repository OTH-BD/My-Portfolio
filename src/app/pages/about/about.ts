import { Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
   @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;

  scrollCarousel(direction: number) {
    const container = this.carousel.nativeElement;
    const scrollAmount = container.offsetWidth * 0.6;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
  
  ngAfterViewInit(): void {
    const options = {
      strings: ['', 'FullStack Developer', 'Frontend Developer', 'Backend Developer', 'Mobile Apps Developer.'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
      
    };

    new Typed('.typing', options);
  }

   
}
