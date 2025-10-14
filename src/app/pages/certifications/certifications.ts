import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class Certifications {
  
   certifications = [
    {
      title: 'Networking Fundamentals',
      source: 'Cisco Networking Academy',
      img: 'assets/networkig.png',
      gradient: 'from-indigo-500 via-blue-500 to-purple-500',
      color: 'text-indigo-300 drop-shadow-[0_0_5px_cyan]',
    },
    {
      title: 'English for IT',
      source: 'Cisco Networking Academy OpenEDG',
      img: 'assets/englishIT1.png',
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      color: 'text-pink-300 drop-shadow-[0_0_5px_pink]',
    },
    {
      title: 'Red Hat System Administration I',
      source: 'Red Hat Academy',
      img: 'assets/redhat.png',
      gradient: 'from-indigo-500 via-blue-500 to-purple-500',
      color: 'text-indigo-300 drop-shadow-[0_0_5px_cyan]',
    },
    {
      title: 'Networking Fundamentals',
      source: 'Cisco Networking Academy',
      img: 'assets/networkig.png',
      gradient: 'from-indigo-500 via-blue-500 to-purple-500',
      color: 'text-indigo-300 drop-shadow-[0_0_5px_cyan]',
    },
    {
      title: 'English for IT',
      source: 'Cisco Networking Academy OpenEDG',
      img: 'assets/englishIT1.png',
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      color: 'text-pink-300 drop-shadow-[0_0_5px_pink]',
    },
    {
      title: 'Networking Fundamentals',
      source: 'Cisco Networking Academy',
      img: 'assets/networkig.png',
      gradient: 'from-indigo-500 via-blue-500 to-purple-500',
      color: 'text-indigo-300 drop-shadow-[0_0_5px_cyan]',
    }
  ];
   
}

