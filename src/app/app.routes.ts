import { Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminPageComponent } from './adminlogin/adminpage/adminpage.component';
import { AdminGuard } from './adminlogin/admin.guard';
import { ComponentsComponent } from './components/components.component';
import { ViewMorePageComponent } from './components/view-more-page/view-more-page.component';

export const routes: Routes = [
	{ path: '', component: ComponentsComponent },
	{ path: 'adminlogin', component: AdminloginComponent },
	{ path: 'adminpage', component: AdminPageComponent, canActivate: [AdminGuard] },
	{ path: 'view-more-page', component: ViewMorePageComponent}
];
