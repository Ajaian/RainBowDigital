import { Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ComponentsComponent } from './components/components.component';

export const routes: Routes = [
	{ path: 'adminlogin', component: AdminloginComponent },
	{ path: '', pathMatch: 'full', component: ComponentsComponent }
];
