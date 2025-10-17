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
      title: '🤖 ChatBot Flutter App',
      description: 'A simple Flutter application that provides a login screen and a chatbot interface using OpenAIs API',
      image: 'https://raw.githubusercontent.com/OTH-BD/chatbot-app-flutter/refs/heads/main/screenshots/chat1.png',
      techs: ['Flutter', 'Dart', 'OpenAI', 'Material Design', 'Ollama'],
      link: 'https://github.com/OTH-BD/chatbot-app-flutter',
      color: 'neon'
    },
    {
      title: '🏦 Application de Gestion des Comptes Bancaires',
      description: ' application web complète pour la gestion de comptes bancaires, développée avec Spring Boot pour le backend et Angular pour le frontend.',
      image: 'https://raw.githubusercontent.com/OTH-BD/Digital-Banking-App/refs/heads/main/screenshots/v1.png',
      techs: ['JAVA', 'Spring Boot', 'MYSQL', 'Angular', 'TypeScript'],
      link: 'https://github.com/OTH-BD/Digital-Banking-App',
      color: 'cyber'
    },
    {
      title: '🚀 User Management System',
      description: 'Une application moderne de gestion dutilisateurs construite avec Angular 20, Bootstrap 5, et une architecture professionnelle basée sur les Signals',
      image: 'https://raw.githubusercontent.com/OTH-BD/AngularUserManagementSys/refs/heads/main/screenshots/usersDirectoryList.png',
      techs: ['Angular', 'Bootstrap', 'TypeScript'],
      link: 'https://github.com/OTH-BD/AngularUserManagementSys',
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
