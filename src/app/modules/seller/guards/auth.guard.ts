import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService:TokenService,private route: Router){}

  canActivate()
  {
    if(!this.tokenService.getToken())
    {
      this.route.navigate(['/seller-login'])
    }

    return true

  }


    
  
  
}
