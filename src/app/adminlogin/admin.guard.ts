import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const AdminGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('adminUser') === 'true') {
    return true;
  } else {
    // Redirect to root (ComponentsComponent)
    return (inject(Router)).createUrlTree(['/']);
  }
};
