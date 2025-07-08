import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
   @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;

  scrollCarousel(direction: number) {
    const container = this.carousel.nativeElement;
    const scrollAmount = container.offsetWidth * 0.6;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

}
