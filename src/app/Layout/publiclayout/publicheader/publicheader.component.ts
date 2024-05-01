import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicheader',
  standalone: true,
  imports: [],
  templateUrl: './publicheader.component.html',
  styleUrl: './publicheader.component.css',
})
export class PublicheaderComponent {
  /**
   Functions for public herader contains login and registrations details
  */
  constructor(private router: Router) {}
  Login() {
    // Your login logic here

    // Redirect to '/secure'
    this.router.navigate(['/secure']);
  }
}
