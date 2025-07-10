import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { About } from '../../pages/about/about';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  phoneNumber: string = '+212695282305'; // Remplacez par votre numéro de téléphone
  email: string = 'othmane.boudali01@gmail.com';
  github: string = 'https://github.com/OTH-BD';
  linkedin: string = 'https://www.linkedin.com/in/othmane-boudali-80344a21a/';
  instagram: string = 'https://www.instagram.com/othmaneboudali/';

}
