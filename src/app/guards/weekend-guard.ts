import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const weekendGuard: CanActivateFn = (route) => {
  const router = inject(Router);

  const bypass = route.queryParams['bypass'];
  const day = new Date().getDay();
  const isWeekend = day === 0 || day === 6;

  if (isWeekend || bypass) {
    return true;
  }

  alert('Weekend Party is available only on weekends');
  router.navigate(['/home']);
  return false;
};
