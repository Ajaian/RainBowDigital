import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
    username = '';
    password = '';
    adminUser:boolean = false;
  constructor(private router: Router) {}

  onSubmit() {
    // placeholder: in a real app you'd call a service
    if (this.username === 'admin' && this.password === 'admin') {
      this.adminUser = true;
      // navigate to the 'common' model — current root route shows ComponentsComponent
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials (demo)');
    }
  }
}
