import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl = "http://127.0.0.1:8000/common/"
  constructor(private http:HttpClient) { }
 
  addSeller(formdata:any):Observable<any>{
    return this.http.post(this.baseUrl + 'seller_reg',formdata)
  }

 addCustomer(formdata:any):Observable<any>{
  return this.http.post(this.baseUrl + 'customer_reg',formdata)
 } 
customerLogin(formdata:any):Observable<any>{
  return this.http.post(this.baseUrl + 'customer_login',formdata)
}
sellerLogin(formdata:any):Observable<any>{
  return this.http.post(this.baseUrl + 'seller_login',formdata)
}

}
