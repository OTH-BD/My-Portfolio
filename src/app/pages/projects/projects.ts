import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
declare var VanillaTilt: any;
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})

  
export class Projects implements AfterViewInit {
   projects = [
    {
      title: 'AI Dashboard',
      description: 'Next.js + Tailwind + TensorFlow',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      techs: ['React', 'AI', 'Node.js'],
      link: '#',
      color: 'neon'
    },
    {
      title: 'E-Commerce Platform',
      description: 'React + GraphQL + Stripe',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      techs: ['React', 'GraphQL', 'MongoDB'],
      link: '#',
      color: 'cyber'
    },
    {
      title: 'Blockchain Explorer',
      description: 'Solidity + Web3.js + Ethers',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      techs: ['Blockchain', 'Web3', 'React'],
      link: '#',
      color: 'matrix'
    }
  ];

  ngAfterViewInit(): void {
    const tiltElements = document.querySelectorAll('.tilt-effect');
    VanillaTilt.init(tiltElements, {
      max: 5,
      glare: true,
      "max-glare": 0.2
    });
  }

}
