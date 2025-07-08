import { Component } from '@angular/core';
import { About } from "../about/about";
import { Navbar } from "../../components/navbar/navbar";
import { RouterModule } from '@angular/router';
import { Skills } from "../skills/skills";
import { Footer } from "../../components/footer/footer";
import { Projects } from "../projects/projects";
import { Certifications } from "../certifications/certifications";

@Component({
  selector: 'app-home',
  imports: [About, Navbar, RouterModule, Skills, Footer, Projects, Certifications],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

 


}
