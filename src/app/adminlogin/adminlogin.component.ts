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
    constructor(private router: Router) {}

    onSubmit() {
      if (this.username === 'admin' && this.password === 'admin') {
        sessionStorage.setItem('adminUser', 'true');
        this.router.navigate(['/adminpage']);
      } else {
        alert('Invalid credentials (demo)');
      }
    }
}
