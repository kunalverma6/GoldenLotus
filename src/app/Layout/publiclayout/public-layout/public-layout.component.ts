import { Component } from '@angular/core';
import { PublicheaderComponent } from '../publicheader/publicheader.component';
import { PublicindexComponent } from '../publicindex/publicindex.component';
import { PublicfooterComponent } from '../publicfooter/publicfooter.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css',
  imports: [PublicheaderComponent, PublicindexComponent, PublicfooterComponent],
})
export class PublicLayoutComponent {}
