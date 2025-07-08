import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { About } from "./pages/about/about";
import { Projects } from "./pages/projects/projects";
import { Skills } from "./pages/skills/skills";
import { Certifications } from "./pages/certifications/certifications";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, About, Projects, Skills, Certifications, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-portfolio';

  ngOnInit() {
   
}

  
}
