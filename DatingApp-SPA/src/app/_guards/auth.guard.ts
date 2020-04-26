import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alretify: AlertifyService
    ) {}

  canActivate(): boolean {
    if (this.authService.loggedin()) {
      return true;
    }

    this.alretify.error('You shall not pass!!!');
    this.router.navigate(['/home']);
  }
}
