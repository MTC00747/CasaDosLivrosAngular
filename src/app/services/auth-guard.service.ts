import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private route : Router , private authService : AuthService) { }
  canActivate():boolean {
    if (this.authService.eAutenticado()){
      return true
    }else {
      this.route.navigate(['/'])
      return false
    }
  }
  }
