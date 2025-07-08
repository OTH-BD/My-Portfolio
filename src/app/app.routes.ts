import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Certifications } from './pages/certifications/certifications';

export const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'certifications', component: Certifications },
    { path: 'about', component: About },
    { path: 'skills', component: Skills },
    { path: 'projects', component: Projects },

];
