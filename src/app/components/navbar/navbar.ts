import { Component, HostListener } from '@angular/core';
import { App } from "../../app";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
 
 

})
export class Navbar {

   isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

   // Cette méthode va écouter les changements de taille de la fenêtre
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const w = (event.target as Window).innerWidth;
    if (w >= 1024 && this.isMobileMenuOpen) {
      // Si largeur >= 1024px (lg breakpoint) et menu mobile ouvert, on ferme le menu
      this.closeMobileMenu();
    }
  }



  

}
